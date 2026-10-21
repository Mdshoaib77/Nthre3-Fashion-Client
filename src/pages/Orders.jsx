import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import Footer from "../components/Footer";
import OrderTrackingModal from "../components/OrderTrackingModal";
import axios from "axios";
import { toast } from "react-toastify";

// localStorage key used to remember the last status we've shown the
// customer for each order, so we only banner-announce *changes* (never on
// first load / first-ever visit to this order).
const STATUS_SEEN_KEY = "nthre3_order_status_seen";

const getSeenStatusMap = () => {
  try {
    return JSON.parse(localStorage.getItem(STATUS_SEEN_KEY) || "{}");
  } catch (error) {
    return {};
  }
};

const statusEmoji = (status) => {
  if (status === "Delivered") return "🎉";
  if (status === "Cancelled") return "⚠️";
  if (status === "Out for Delivery") return "🚚";
  return "📦";
};

const Orders = () => {
  const { backendUrl, token, currency, getEffectivePrice } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  // Full order (delivery method, courier info, status history...) for
  // whichever order's "Track Order" button was last clicked. Kept separate
  // from the flattened per-item orderData above so the existing item list
  // UI doesn't need to change.
  const [trackedOrder, setTrackedOrder] = useState(null);
  // Status changes detected since the customer last viewed this page, shown
  // as small dismissible banners (e.g. "🎉 Your order is now Delivered!").
  const [statusUpdates, setStatusUpdates] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + "/api/order/userorders", {}, { headers: { token } })
      if (response.data.success) {
        // Compare each order's current status against what we last showed
        // the customer, so we only surface genuine changes.
        const seenMap = getSeenStatusMap()
        const updatedSeenMap = { ...seenMap }
        const changes = []

        let allOrdersItem = []
        response.data.orders.map((order) => {
          const previouslySeenStatus = seenMap[order._id]
          if (previouslySeenStatus !== undefined && previouslySeenStatus !== order.status) {
            changes.push({ orderId: order._id, status: order.status })
          }
          updatedSeenMap[order._id] = order.status

          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            // Keep a reference to the full order so "Track Order" can open
            // a detailed view (delivery method, courier info, timeline).
            item['_order'] = order
            allOrdersItem.push(item)
          })
        })

        localStorage.setItem(STATUS_SEEN_KEY, JSON.stringify(updatedSeenMap))
        if (changes.length > 0) setStatusUpdates(changes)

        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const dismissStatusUpdate = (orderId) => {
    setStatusUpdates((prev) => prev.filter((u) => u.orderId !== orderId))
  }

  // Temporary data
  useEffect(() => {
    loadOrderData()
  }, [token]);

  // Auto-dismiss each banner after a few seconds so they don't linger.
  useEffect(() => {
    if (statusUpdates.length === 0) return
    const timers = statusUpdates.map((u) =>
      setTimeout(() => dismissStatusUpdate(u.orderId), 6000)
    )
    return () => timers.forEach(clearTimeout)
  }, [statusUpdates]);

  return (
    <div>
      <div className="mb-16 bg-primary">
        {/* Container */}
        <div className="py-10 max-padd-container">
          <Title title1={"Order"} title2={"List"} />

          {/* Status-change banners */}
          <AnimatePresence>
            {statusUpdates.map((u) => (
              <motion.div
                key={u.orderId}
                initial={{ opacity: 0, y: -12, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -12, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-between gap-3 px-4 py-3 mb-3 text-sm text-green-700 rounded-2xl bg-green-50 ring-1 ring-green-200"
              >
                <span>{statusEmoji(u.status)} Your order is now <span className="font-semibold">{u.status}</span>!</span>
                <button
                  type="button"
                  onClick={() => dismissStatusUpdate(u.orderId)}
                  aria-label="Dismiss"
                  className="flex-shrink-0 p-0.5 rounded-full hover:bg-green-100"
                >
                  <IoClose size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Container */}
          {orderData.map((item, i) => (
            <div key={i} className="p-3 mt-3 bg-white sm:p-4 rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft transition-shadow duration-500 hover:shadow-lift">
              <div className="flex flex-col gap-4 text-gray-700">
                <div className="flex w-full gap-x-3">
                  {/* image */}
                  <div className="flex gap-6">
                    <img
                      src={item.image[0]}
                      alt="orderImg"
                      className="w-16 sm:w-20 rounded-xl aspect-[5/6] object-cover"
                    />
                  </div>
                  {/* order info */}
                  <div className="block w-full">
                    <h5 className="capitalize h5 line-clamp-1">{item.name}</h5>
                    <div className="flex-wrap flexBetween">
                      <div>
                        <div className="flex items-center gap-x-2 sm:gap-x-3">
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Price:</h5>
                            <p>
                              {currency}
                              {getEffectivePrice(item)}
                            </p>
                          </div>
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Quantity:</h5>
                            <p>{item.quantity}</p>
                          </div>
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Size:</h5>
                            <p>{item.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Date:</h5>
                          <p>{new Date(item.date).toDateString()}</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Payment</h5>
                          <p>{item.paymentMethod}</p>
                        </div>
                      </div>
                      {/* Status & button */}
                      <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                          <p className="h-2 bg-green-500 rounded-full min-w-2"></p>
                          <p>{item.status}</p>
                        </div>
                        <button onClick={() => setTrackedOrder(item._order)} className="btn-secondary !px-4 !py-1.5 !text-xs">Track Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {trackedOrder && (
        <OrderTrackingModal order={trackedOrder} onClose={() => setTrackedOrder(null)} />
      )}
    </div>
  );
};

export default Orders;
