// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title'

// const CartTotal = ({ amount, hideDeliverySelector }) => {

//     const { currency, getCartAmount, delivery_charges, deliveryLocation, setDeliveryLocation, DELIVERY_CHARGES } = useContext(ShopContext)

//     // `amount` lets a caller (e.g. Buy Now flow) override the subtotal with a
//     // single product's price instead of the whole cart's amount.
//     const subtotal = amount !== undefined ? amount : getCartAmount()

//     return (
//         <section className='w-full p-5 sm:p-6 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
//             <Title title1={'Cart'} title2={'Total'} title1Styles={'h3'} />
//             <div className='flexBetween pt-3'>
//                 <h5 className='h5'>SubTotal:</h5>
//                 <p className='h5'>{currency}{subtotal}.00</p>
//             </div>
//             <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />

//             {!hideDeliverySelector && (
//                 <>
//                     <div className='pt-3'>
//                         <h5 className='h5 mb-2'>Delivery Area:</h5>
//                         <div className='flex gap-3'>
//                             <div
//                                 onClick={() => setDeliveryLocation('inside')}
//                                 className={`${deliveryLocation === 'inside' ? 'btn-dark' : 'btn-white'} !py-1.5 text-xs cursor-pointer`}
//                             >
//                                 Inside Bogura — {currency}{DELIVERY_CHARGES.inside}
//                             </div>
//                             <div
//                                 onClick={() => setDeliveryLocation('outside')}
//                                 className={`${deliveryLocation === 'outside' ? 'btn-dark' : 'btn-white'} !py-1.5 text-xs cursor-pointer`}
//                             >
//                                 Outside Bogura — {currency}{DELIVERY_CHARGES.outside}
//                             </div>
//                         </div>
//                     </div>
//                     <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
//                 </>
//             )}

//             <div className='flexBetween pt-3'>
//                 <h5 className='h5'>Shipping Fee:</h5>
//                 <p className='h5'>{subtotal === 0 ? "0.00" : `${currency}${delivery_charges}.00`}</p>
//             </div>
//             <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
//             <div className='flexBetween pt-3'>
//                 <h5 className='h5 !text-[17px]'>Total:</h5>
//                 <p className='h5 !text-[17px] text-tertiary dark:text-white'>{currency}{subtotal === 0 ? "0.00" : subtotal + delivery_charges}</p>
//             </div>
//             <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
//         </section>
//     )
// }

// export default CartTotal


import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = ({ amount, hideDeliverySelector }) => {

    const { currency, getCartAmount, delivery_charges, deliveryLocation, setDeliveryLocation, DELIVERY_CHARGES } = useContext(ShopContext)

    // `amount` lets a caller (e.g. Buy Now flow) override the subtotal with a
    // single product's price instead of the whole cart's amount.
    const subtotal = amount !== undefined ? amount : getCartAmount()

    return (
        <section className='w-full p-5 sm:p-6 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
            <Title title1={'Cart'} title2={'Total'} title1Styles={'h3'} />
            <div className='flexBetween pt-3'>
                <h5 className='h5'>SubTotal:</h5>
                <p className='h5'>{currency}{subtotal}.00</p>
            </div>
            <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />

            {!hideDeliverySelector && (
                <>
                    <div className='pt-3'>
                        <h5 className='h5 mb-2'>Delivery Area:</h5>
                        <div className='flex gap-3'>
                            <div
                                onClick={() => setDeliveryLocation('inside')}
                                className={`${deliveryLocation === 'inside' ? 'btn-dark' : 'btn-white'} !py-1.5 text-xs cursor-pointer`}
                            >
                                Inside Dhaka — {currency}{DELIVERY_CHARGES.inside}
                            </div>
                            <div
                                onClick={() => setDeliveryLocation('outside')}
                                className={`${deliveryLocation === 'outside' ? 'btn-dark' : 'btn-white'} !py-1.5 text-xs cursor-pointer`}
                            >
                                Outside Dhaka — {currency}{DELIVERY_CHARGES.outside}
                            </div>
                        </div>
                    </div>
                    <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
                </>
            )}

            <div className='flexBetween pt-3'>
                <h5 className='h5'>Shipping Fee:</h5>
                <p className='h5'>{subtotal === 0 ? "0.00" : `${currency}${delivery_charges}.00`}</p>
            </div>
            <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
            <div className='flexBetween pt-3'>
                <h5 className='h5 !text-[17px]'>Total:</h5>
                <p className='h5 !text-[17px] text-tertiary dark:text-white'>{currency}{subtotal === 0 ? "0.00" : subtotal + delivery_charges}</p>
            </div>
            <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
        </section>
    )
}

export default CartTotal