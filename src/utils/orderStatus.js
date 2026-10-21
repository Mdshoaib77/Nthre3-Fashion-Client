// Canonical order-status flow, adapted per delivery method. "Shipped" (shown
// as "Handed to Courier / Shipped") only appears for courier orders — local
// orders skip straight from Processing to Out for Delivery.
export const LOCAL_STATUS_FLOW = ['Order Placed', 'Confirmed', 'Processing', 'Out for Delivery', 'Delivered']
export const COURIER_STATUS_FLOW = ['Order Placed', 'Confirmed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered']
export const CANCELLED_STATUS = 'Cancelled'

export const statusLabel = (status, deliveryMethod) => {
  if (status === 'Shipped') return deliveryMethod === 'courier' ? 'Handed to Courier / Shipped' : 'Shipped'
  return status
}

// Builds the ordered timeline steps for the "Order Progress" view.
// Each step: { status, label, done, current, timestamp }
//
// Orders placed before this system existed may carry a legacy status
// (e.g. "Packing") that isn't part of the canonical flow — that's mapped
// to the closest equivalent step so old orders still render a sensible
// timeline instead of nothing matching at all.
export const buildStatusTimeline = (order) => {
  const method = order?.deliveryMethod || 'local'
  const flow = method === 'courier' ? COURIER_STATUS_FLOW : LOCAL_STATUS_FLOW
  const history = Array.isArray(order?.statusHistory) ? order.statusHistory : []

  const historyFor = (status) => history.find((h) => h.status === status)

  const currentIndex = (() => {
    const idx = flow.indexOf(order?.status)
    if (idx !== -1) return idx
    if (order?.status === 'Packing') return flow.indexOf('Processing')
    if (order?.status === 'Shipped' && method === 'local') return flow.indexOf('Out for Delivery') - 1
    return -1
  })()

  return flow.map((status, index) => ({
    status,
    label: statusLabel(status, method),
    done: currentIndex !== -1 && index <= currentIndex,
    current: currentIndex !== -1 && index === currentIndex,
    timestamp: historyFor(status)?.timestamp || null,
  }))
}

export const isCancelled = (order) => order?.status === CANCELLED_STATUS
