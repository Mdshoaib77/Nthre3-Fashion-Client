// import React, { useContext, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import Footer from '../components/Footer'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { parseCartKey } from '../utils/cartKey'

// const PlaceOrder = () => {

//     const { navigate, token, cartItems, setCartItems, getCartAmount, delivery_charges, deliveryLocation, products, backendUrl } = useContext(ShopContext)
//     const [method, setMethod] = useState('cod')

//     // Buy Now flow: a single item passed via router state (from Product.jsx),
//     // bypassing the cart entirely. Normal checkout (buyNowItem === null)
//     // keeps working exactly as before, built from cartItems.
//     const location = useLocation()
//     const buyNowItem = location.state?.buyNow || null

//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         street: "",
//         city: "",
//         state: "",
//         zipcode: "",
//         country: "",
//         phone: ""
//     })

//     const onChangeHandler = (e) => {
//         const name = e.target.name
//         const value = e.target.value

//         setFormData(data => ({ ...data, [name]: value }))
//     }

//     // Subtotal shown/used for this page — the single Buy Now item's price,
//     // or the whole cart's amount for normal checkout.
//     const subtotal = buyNowItem ? buyNowItem.price * buyNowItem.quantity : getCartAmount()

//     const onSubmitHandler = async (e) => {
//         e.preventDefault()
//         try {
//             let orderItems = []

//             if (buyNowItem) {
//                 orderItems.push({
//                     _id: buyNowItem._id,
//                     name: buyNowItem.name,
//                     image: buyNowItem.image,
//                     size: buyNowItem.size,
//                     color: buyNowItem.color || undefined,
//                     quantity: buyNowItem.quantity,
//                     price: buyNowItem.price,
//                 })
//             } else {
//                 for (const items in cartItems) {
//                     for (const item in cartItems[items]) {
//                         if (cartItems[items][item] > 0) {
//                             const itemInfo = structuredClone(products.find(product => product._id === items))
//                             if (itemInfo) {
//                                 // `item` is the cart key — plain size, or
//                                 // "size__color" when a color was selected.
//                                 const { size, color } = parseCartKey(item)
//                                 itemInfo.size = size
//                                 if (color) itemInfo.color = color
//                                 itemInfo.quantity = cartItems[items][item]
//                                 orderItems.push(itemInfo)
//                             }
//                         }
//                     }
//                 }
//             }

//             let orderData = {
//                 address: formData,
//                 items: orderItems,
//                 amount: subtotal + delivery_charges,
//                 deliveryLocation: deliveryLocation,
//                 deliveryCharge: delivery_charges
//             }

//             switch (method) {
//                 // api calls for COD
//                 case 'cod':
//                     const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
//                     // console.log(response)
//                     if (response.data.success) {
//                         if (!buyNowItem) setCartItems({})
//                         navigate('/orders')
//                     } else {
//                         toast.error(response.data.message)
//                     }
//                     break;
//                 // api calls for stripe
//                 case 'stripe':
//                     const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
//                     if (responseStripe.data.success) {
//                         const { session_url } = responseStripe.data
//                         window.location.replace(session_url)
//                     } else {
//                         toast.error(responseStripe.data.message)
//                     }
//                     break;
//                 default:
//                     break
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     return (
//         <div>
//             <div className='mb-16 bg-primary'>
//                 {/* Container */}
//                 <form onSubmit={onSubmitHandler} className='py-10 max-padd-container'>
//                     <div className='flex flex-col gap-12 xl:flex-row xl:gap-16 2xl:gap-28'>
//                         {/* Left Side */}
//                         <div className='flex flex-1 flex-col gap-3 text-[95%]'>
//                             <Title title1={'Delivery'} title2={'Information'} />
//                             <div className='flex flex-col gap-3 sm:flex-row'>
//                                 <input onChange={onChangeHandler} value={formData.firstName} type="text" name='firstName' placeholder='First Name' className='w-full sm:w-1/2 px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                                 <input onChange={onChangeHandler} value={formData.lastName} type="text" name='lastName' placeholder='Last Name' className='w-full sm:w-1/2 px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                             </div>
//                             <input onChange={onChangeHandler} value={formData.email} type="text" name='email' placeholder='Email' className='px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                             <input onChange={onChangeHandler} value={formData.phone} type="text" name='phone' placeholder='Phone Number' className='px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                             <input onChange={onChangeHandler} value={formData.street} type="text" name='street' placeholder='Street' className='px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                             <div className='flex flex-col gap-3 sm:flex-row'>
//                                 <input onChange={onChangeHandler} value={formData.city} type="text" name='city' placeholder='City' className='w-full sm:w-1/2 px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                                 <input onChange={onChangeHandler} value={formData.state} type="text" name='state' placeholder='State' className='w-full sm:w-1/2 px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                             </div>
//                             <div className='flex flex-col gap-3 sm:flex-row'>
//                                 <input onChange={onChangeHandler} value={formData.zipcode} type="text" name='zipcode' placeholder='Zip Code' className='w-full sm:w-1/2 px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                                 <input onChange={onChangeHandler} value={formData.country} type="text" name='country' placeholder='Country' className='w-full sm:w-1/2 px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
//                             </div>
//                         </div>

//                         {/* Right Side */}
//                         <div className='flex flex-col flex-1'>
//                             {buyNowItem && (
//                                 <div className='flex items-center gap-3 p-3 mb-5 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
//                                     <img src={buyNowItem.image?.[0]} alt={buyNowItem.name} className='object-cover w-16 h-16 rounded-xl' />
//                                     <div className='flex flex-col min-w-0'>
//                                         <p className='medium-14 line-clamp-1'>{buyNowItem.name}</p>
//                                         <p className='text-xs text-gray-30'>
//                                             Size: {buyNowItem.size}
//                                             {buyNowItem.color && ` • Color: ${buyNowItem.color}`}
//                                             {` • Qty: ${buyNowItem.quantity}`}
//                                         </p>
//                                     </div>
//                                 </div>
//                             )}
//                             <CartTotal amount={subtotal} hideDeliverySelector={false} />
//                             {/* Payment method */}
//                             <div className='my-6'>
//                                 <h3 className='mb-5 bold-20'>Payment <span className='text-secondary'>Method</span></h3>
//                                 <div className='flex flex-wrap gap-3'>
//                                     {/* <div onClick={() => setMethod('stripe')} className={`${method === "stripe" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Stripe</div> */}
//                                     <div onClick={() => setMethod('cod')} className={`${method === "cod" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Cash on Delivery</div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <button type='submit' className='w-full btn-secondary sm:w-auto min-h-12'>Place Order</button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>

//             <Footer />
//         </div>
//     )
// }

// export default PlaceOrder


import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { parseCartKey } from '../utils/cartKey'

const PlaceOrder = () => {

    const { navigate, token, cartItems, setCartItems, getCartAmount, delivery_charges, deliveryLocation, products, backendUrl } = useContext(ShopContext)
    const [method, setMethod] = useState('cod')

    // Buy Now flow: a single item passed via router state (from Product.jsx),
    // bypassing the cart entirely. Normal checkout (buyNowItem === null)
    // keeps working exactly as before, built from cartItems.
    const location = useLocation()
    const buyNowItem = location.state?.buyNow || null

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData(data => ({ ...data, [name]: value }))
    }

    // Subtotal shown/used for this page — the single Buy Now item's price,
    // or the whole cart's amount for normal checkout.
    const subtotal = buyNowItem ? buyNowItem.price * buyNowItem.quantity : getCartAmount()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            let orderItems = []

            if (buyNowItem) {
                orderItems.push({
                    _id: buyNowItem._id,
                    name: buyNowItem.name,
                    image: buyNowItem.image,
                    size: buyNowItem.size,
                    color: buyNowItem.color || undefined,
                    quantity: buyNowItem.quantity,
                    price: buyNowItem.price,
                })
            } else {
                for (const items in cartItems) {
                    for (const item in cartItems[items]) {
                        if (cartItems[items][item] > 0) {
                            const itemInfo = structuredClone(products.find(product => product._id === items))
                            if (itemInfo) {
                                // `item` is the cart key — plain size, or
                                // "size__color" when a color was selected.
                                const { size, color } = parseCartKey(item)
                                itemInfo.size = size
                                if (color) itemInfo.color = color
                                itemInfo.quantity = cartItems[items][item]
                                orderItems.push(itemInfo)
                            }
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: subtotal + delivery_charges,
                deliveryLocation: deliveryLocation,
                deliveryCharge: delivery_charges
            }

            switch (method) {
                // api calls for COD
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
                    // console.log(response)
                    if (response.data.success) {
                        if (!buyNowItem) setCartItems({})
                        navigate('/orders')
                    } else {
                        toast.error(response.data.message)
                    }
                    break;
                // api calls for stripe
                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
                    if (responseStripe.data.success) {
                        const { session_url } = responseStripe.data
                        window.location.replace(session_url)
                    } else {
                        toast.error(responseStripe.data.message)
                    }
                    break;
                default:
                    break
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div>
            <div className='mb-16 bg-primary'>
                {/* Container */}
                <form onSubmit={onSubmitHandler} className='py-10 max-padd-container'>
                    <div className='flex flex-col gap-12 xl:flex-row xl:gap-16 2xl:gap-28'>
                        {/* Left Side */}
                        <div className='flex flex-1 flex-col gap-3 text-[95%]'>
                            <Title title1={'Delivery'} title2={'Information'} />
                            <input onChange={onChangeHandler} value={formData.fullName} type="text" name='fullName' placeholder='Full Name' className='px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
                            <input onChange={onChangeHandler} value={formData.phone} type="tel" name='phone' placeholder='Phone Number' className='px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60' required />
                            <textarea onChange={onChangeHandler} value={formData.address} name='address' placeholder='Address' rows={3} className='px-4 py-3 bg-white rounded-xl outline-none ring-1 ring-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/60 resize-none' required />
                        </div>

                        {/* Right Side */}
                        <div className='flex flex-col flex-1'>
                            {buyNowItem && (
                                <div className='flex items-center gap-3 p-3 mb-5 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
                                    <img src={buyNowItem.image?.[0]} alt={buyNowItem.name} className='object-cover w-16 h-16 rounded-xl' />
                                    <div className='flex flex-col min-w-0'>
                                        <p className='medium-14 line-clamp-1'>{buyNowItem.name}</p>
                                        <p className='text-xs text-gray-30'>
                                            Size: {buyNowItem.size}
                                            {buyNowItem.color && ` • Color: ${buyNowItem.color}`}
                                            {` • Qty: ${buyNowItem.quantity}`}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <CartTotal amount={subtotal} hideDeliverySelector={false} />
                            {/* Payment method */}
                            <div className='my-6'>
                                <h3 className='mb-5 bold-20'>Payment <span className='text-secondary'>Method</span></h3>
                                <div className='flex flex-wrap gap-3'>
                                    {/* <div onClick={() => setMethod('stripe')} className={`${method === "stripe" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Stripe</div> */}
                                    <div onClick={() => setMethod('cod')} className={`${method === "cod" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Cash on Delivery</div>
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='w-full btn-secondary sm:w-auto min-h-12'>Place Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default PlaceOrder