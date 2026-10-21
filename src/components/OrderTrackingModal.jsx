import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { FaTruck, FaWhatsapp, FaCheck } from 'react-icons/fa6'
import { MdContentCopy } from 'react-icons/md'
import { toast } from 'react-toastify'
import { buildStatusTimeline, isCancelled } from '../utils/orderStatus'

// WhatsApp support number for the "Need Help?" link on the tracking modal.
// wa.me links need the number in international format with no spaces/+.
const SUPPORT_WHATSAPP_NUMBER = '8801785283465'

// Customer-facing order tracking view, opened from the "Track Order" button
// on the Orders page. Shows delivery method, courier info (only for courier
// orders), an animated order-progress timeline that adapts to local vs
// courier delivery, and a WhatsApp support link — without touching the
// existing per-item order list above it.
const OrderTrackingModal = ({ order, onClose }) => {
  const [copied, setCopied] = useState(false)

  if (!order) return null

  const method = order.deliveryMethod || 'local'
  const cancelled = isCancelled(order)
  const timeline = buildStatusTimeline(order)
  const hasTrackingUrl = method === 'courier' && !!order.courier?.trackingUrl
  const hasCourierInfo = method === 'courier' && (order.courier?.name || order.courier?.trackingId)
  const shortId = order._id?.slice(-8).toUpperCase()

  // How far along the animated green line should fill: 0 when only the
  // first step is done, 1 when the last step (Delivered) is done — so the
  // line always ends exactly at the current step's marker.
  const doneCount = timeline.filter((s) => s.done).length
  const fillFraction = timeline.length > 1 ? Math.max(0, (doneCount - 1) / (timeline.length - 1)) : 0

  const formatTimestamp = (ts) => {
    if (!ts) return ''
    const d = new Date(ts)
    return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
  }

  const handleCopyTrackingId = async () => {
    if (!order.courier?.trackingId) return
    try {
      await navigator.clipboard.writeText(order.courier.trackingId)
      setCopied(true)
      toast.success('Tracking ID copied!')
      setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      console.log(error)
      toast.error('Could not copy tracking ID')
    }
  }

  const whatsappHref = `https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I need help with my order #${shortId}`
  )}`

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#211c19]/55 backdrop-blur-[3px]'
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className='relative w-full max-w-md p-6 overflow-y-auto bg-white shadow-2xl rounded-3xl max-h-[85vh] ring-1 ring-[color:var(--line)] dark:bg-[#1e1a17] dark:text-darktext'
        >
          <button
            type='button'
            onClick={onClose}
            aria-label='Close'
            className='absolute p-1.5 text-gray-500 transition-colors duration-300 rounded-full top-4 right-4 hover:bg-primary hover:text-tertiary dark:hover:text-white'
          >
            <IoClose size={20} />
          </button>

          <h5 className='pr-8 h5'>Order #{shortId}</h5>
          <p className='mt-1 text-xs text-gray-500'>{new Date(order.date).toDateString()}</p>

          {/* Delivery method + courier info */}
          <div className='pt-4 mt-4 border-t border-gray-100 dark:border-white/10'>
            <p className='medium-14'>
              {method === 'courier' ? '📦 Courier Delivery' : '🏠 Local Delivery'}
            </p>

            {method === 'local' && (order.localDelivery?.riderName || order.localDelivery?.riderPhone || order.localDelivery?.estimatedDate) && (
              <div className='p-3 mt-2 space-y-1 text-sm rounded-md text-gray-600 dark:text-gray-300 bg-gray-10 dark:bg-white/5'>
                {order.localDelivery?.riderName && <p>Rider: {order.localDelivery.riderName}</p>}
                {order.localDelivery?.riderPhone && <p>Contact: {order.localDelivery.riderPhone}</p>}
                {order.localDelivery?.estimatedDate && <p>Estimated Delivery: {order.localDelivery.estimatedDate}</p>}
              </div>
            )}

            {hasCourierInfo && (
              <div className='mt-2 space-y-1.5 text-sm text-gray-600 dark:text-gray-300'>
                {order.courier?.name && <p>Courier: <span className='font-medium text-tertiary dark:text-white'>{order.courier.name}</span></p>}
                {order.courier?.trackingId && (
                  <div className='flex items-center gap-2'>
                    <p>Tracking ID: <span className='font-medium text-tertiary dark:text-white'>{order.courier.trackingId}</span></p>
                    <button
                      type='button'
                      onClick={handleCopyTrackingId}
                      aria-label='Copy tracking ID'
                      className='p-1 text-gray-400 rounded hover:text-secondary hover:bg-gray-10'
                    >
                      {copied ? <FaCheck size={12} className='text-green-600' /> : <MdContentCopy size={14} />}
                    </button>
                  </div>
                )}
              </div>
            )}

            {hasTrackingUrl ? (
              <a
                href={order.courier.trackingUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 mt-3 btn-secondary !text-xs !py-1.5 !px-3'
              >
                Track on Courier <FaTruck />
              </a>
            ) : method === 'courier' ? (
              <p className='mt-3 text-xs italic text-gray-400'>External tracking isn't available for this order yet.</p>
            ) : null}
          </div>

          {/* Order progress */}
          <div className='pt-4 mt-4 border-t border-gray-100 dark:border-white/10'>
            <p className='mb-4 medium-14'>Order Progress</p>

            {cancelled ? (
              <p className='text-sm font-semibold text-red-500'>✕ Order Cancelled</p>
            ) : (
              <div className='relative pb-1'>
                {/* Base connecting line (full length, muted) */}
                <div className='absolute w-0.5 bg-gray-200 top-4 bottom-4 left-4 dark:bg-white/10' />
                {/* Animated fill — grows down from the top, stopping at the
                    current step, like Amazon/Pathao-style trackers. */}
                <motion.div
                  style={{ transformOrigin: 'top' }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: fillFraction }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className='absolute w-0.5 bg-green-500 top-4 bottom-4 left-4'
                />

                <div className='space-y-5'>
                  {timeline.map((step) => (
                    <div key={step.status} className='relative flex items-start gap-3'>
                      <span className='relative flex items-center justify-center flex-shrink-0 w-8 h-8'>
                        {step.current && (
                          <span className='absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping' />
                        )}
                        <span
                          className={`relative z-10 flex items-center justify-center w-8 h-8 text-xs rounded-full ring-4 ring-white dark:ring-[#1e1a17] ${
                            step.done
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-100 text-gray-400 dark:bg-white/10'
                          } ${step.current ? '!bg-orange-500' : ''}`}
                        >
                          {step.done && !step.current ? <FaCheck size={12} /> : step.current ? '🔄' : ''}
                        </span>
                      </span>
                      <div className='pt-1.5'>
                        <p className={`text-sm ${step.done ? 'font-medium text-tertiary dark:text-white' : 'text-gray-400'}`}>
                          {step.label}
                        </p>
                        {step.timestamp && (
                          <p className='text-xs text-gray-400'>{formatTimestamp(step.timestamp)}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Support */}
          <div className='pt-3 mt-4 text-center border-t border-gray-100 dark:border-white/10'>
            <a
              href={whatsappHref}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-600'
            >
              <FaWhatsapp size={14} /> Need Help? Chat with us on WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default OrderTrackingModal
