import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Item = ({ product }) => {
    const { currency, getEffectivePrice } = useContext(ShopContext)
    const outOfStock = product.inStock === false
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='h-full'
        >
            <div className='product-card'>
                {/* Image */}
                <Link
                    to={`/product/${product._id}`}
                    className='product-media'
                >
                    <img
                        src={product.image[0]}
                        alt="productImg"
                        loading="lazy"
                    />
                    {outOfStock && (
                        <span className='absolute z-10 px-2.5 py-1 text-xs font-semibold text-red-700 rounded-full top-3 left-3 bg-white/95 ring-1 ring-red-200 backdrop-blur'>
                            Stock Out
                        </span>
                    )}
                </Link>

                {/* Info */}
                <div className='flex flex-col flex-1 p-3.5 pt-3'>
                    <h4 className='bold-15 line-clamp-1 !my-0 !font-semibold text-tertiary dark:text-white'>
                        {product.name}
                    </h4>

                    <div className='pt-1.5 flexBetween'>
                        <h5 className='pr-2 h5 !mb-0 flex items-baseline gap-x-2 tabular-nums'>
                            {product.offerPrice ? (
                                <>
                                    <span className='text-gray-400 line-through text-xs font-normal'>{currency}{product.regularPrice}</span>
                                    <span className='text-secondary'>{currency}{product.offerPrice}</span>
                                </>
                            ) : (
                                <span>{currency}{getEffectivePrice(product)}</span>
                            )}
                        </h5>

                        <div className='flex items-center gap-x-1 text-[13px]'>
                            <FaStar className='text-secondary'/>
                            <h5 className='h5 !mb-0'>4.8</h5>
                        </div>
                    </div>

                    <p className='pt-2 text-[13.5px] line-clamp-2 min-h-[2.9em]'>
                        {product.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Item
