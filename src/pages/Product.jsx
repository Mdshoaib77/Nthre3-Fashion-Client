// // // import React, { useContext, useEffect, useState } from 'react'
// // // import { motion } from 'framer-motion'
// // // import { useParams } from 'react-router-dom'
// // // import { toast } from 'react-toastify'
// // // import { ShopContext } from '../context/ShopContext'
// // // import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
// // // import { FaHeart } from 'react-icons/fa'
// // // import { TbShoppingBagPlus } from 'react-icons/tb'
// // // import { IoFlashSharp } from 'react-icons/io5'
// // // import ProductDescription from '../components/ProductDescription'
// // // import ProductFeatures from '../components/ProductFeatures'
// // // import RelatedProducts from '../components/RelatedProducts'
// // // import Footer from '../components/Footer'
// // // import { resolveColorHex } from '../utils/colorUtils'

// // // const Product = () => {

// // //   const { productId } = useParams()
// // //   const { products, currency, addToCart, navigate, getEffectivePrice } = useContext(ShopContext)
// // //   const [product, setProduct] = useState(null)
// // //   const [image, setImage] = useState("")
// // //   const [size, setSize] = useState("")
// // //   const [color, setColor] = useState("")

// // //   const fetchProductData = async () => {
// // //     const selectedProduct = products.find((item) => item._id === productId)
// // //     if (selectedProduct) {
// // //       setProduct(selectedProduct)
// // //       setImage(selectedProduct.image[0])
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     fetchProductData()
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //   }, [productId, products])

// // //   // Reset size/color selection whenever the product itself changes.
// // //   useEffect(() => {
// // //     setSize("")
// // //     setColor("")
// // //   }, [productId])

// // //   if (!product) {
// // //     return <div>...Loading</div>
// // //   }

// // //   // colorsBySize takes priority — only the colors available for the
// // //   // currently selected size are shown. Falls back to the old flat "colors"
// // //   // field for backward compatibility when colorsBySize has nothing for
// // //   // this size (or doesn't exist at all).
// // //   const colorsForSelectedSize = (() => {
// // //     if (!size) return []
// // //     const bySize = product.colorsBySize
// // //     if (bySize) {
// // //       const sizeColors = bySize instanceof Map ? bySize.get(size) : bySize[size]
// // //       if (Array.isArray(sizeColors) && sizeColors.length > 0) {
// // //         return sizeColors
// // //       }
// // //     }
// // //     return product.colors || []
// // //   })()

// // //   const hasColorOptions = colorsForSelectedSize.length > 0

// // //   const onSelectSize = (item) => {
// // //     setSize(item)
// // //     setColor("") // Changing size resets color since options depend on size
// // //   }

// // //   const validateSelection = () => {
// // //     if (!size) {
// // //       toast.error("Please select a size first")
// // //       return false
// // //     }
// // //     if (hasColorOptions && !color) {
// // //       toast.error("Please select a color")
// // //       return false
// // //     }
// // //     return true
// // //   }

// // //   const handleAddToCart = () => {
// // //     if (!validateSelection()) return
// // //     addToCart(product._id, size, hasColorOptions ? color : undefined)
// // //   }

// // //   const handleBuyNow = () => {
// // //     if (!validateSelection()) return
// // //     const unitPrice = getEffectivePrice(product)
// // //     navigate('/place-order', {
// // //       state: {
// // //         buyNow: {
// // //           _id: product._id,
// // //           name: product.name,
// // //           image: product.image,
// // //           size,
// // //           color: hasColorOptions ? color : "",
// // //           quantity: 1,
// // //           price: unitPrice,
// // //         },
// // //       },
// // //     })
// // //   }

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //     >
// // //       <div className='max-padd-container'>

// // //         {/* Product data */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 22 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// // //           className='flex flex-col gap-8 p-4 mb-6 sm:gap-12 sm:p-6 lg:p-8 xl:flex-row bg-primary rounded-3xl'
// // //         >

// // //           {/* Product image */}
// // //           <motion.div
// // //             initial={{ x: -30, opacity: 0 }}
// // //             animate={{ x: 0, opacity: 1 }}
// // //             transition={{ duration: 0.8 }}
// // //             className='flex flex-1 gap-3 sm:gap-4 xl:flex-1'
// // //           >
// // //             <div className='flex flex-col gap-2 sm:gap-3 shrink-0'>
// // //               {product.image.map((item, i) => (
// // //                 <motion.img
// // //                   key={i}
// // //                   onClick={() => setImage(item)}
// // //                   src={item}
// // //                   alt="productImg"
// // //                   whileHover={{ scale: 1.04 }}
// // //                   transition={{ duration: 0.3 }}
// // //                   className={`w-14 sm:w-[76px] aspect-[5/6] object-cover rounded-xl cursor-pointer ring-2 transition-[box-shadow,opacity] duration-300 ${item === image ? 'ring-secondary' : 'ring-transparent opacity-80 hover:opacity-100'}`}
// // //                 />
// // //               ))}
// // //             </div>

// // //             <motion.div
// // //               key={image}
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ duration: 0.4 }}
// // //               className='flex-1 min-w-0 max-w-[520px]'
// // //             >
// // //               <motion.img
// // //                 src={image}
// // //                 alt="productImg"
// // //                 className='w-full aspect-[5/6] object-cover rounded-2xl bg-gray-10 shadow-soft'
// // //               />
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* Product info */}
// // //           <motion.div
// // //             initial={{ x: 30, opacity: 0 }}
// // //             animate={{ x: 0, opacity: 1 }}
// // //             transition={{ duration: 0.8 }}
// // //             className='flex-[1.5] rounded-2xl xl:px-7'
// // //           >
// // //             <h3 className='!leading-tight h3 !mb-2'>{product.name}</h3>

// // //             {/* Rating */}
// // //             <div className='flex items-baseline gap-x-5'>
// // //               <div className='flex items-center gap-x-2 text-secondary'>
// // //                 <div className='flex gap-x-2 text-secondary'>
// // //                   <FaStar />
// // //                   <FaStar />
// // //                   <FaStar />
// // //                   <FaStar />
// // //                   <FaStarHalfStroke />
// // //                 </div>
// // //                 <span className='medium-14'>(122)</span>
// // //               </div>
// // //             </div>

// // //             <div className='flex flex-wrap items-baseline my-2 gap-x-3'>
// // //               {product.offerPrice ? (
// // //                 <>
// // //                   <h4 className='!mb-0 !text-[18px] font-normal text-gray-400 line-through tabular-nums'>{currency}{product.regularPrice}.00</h4>
// // //                   <h4 className='!mb-0 !text-[28px] text-secondary tabular-nums'>{currency}{product.offerPrice}.00</h4>
// // //                 </>
// // //               ) : (
// // //                 <h4 className='!mb-0 !text-[28px] tabular-nums'>{currency}{product.regularPrice ?? product.price}.00</h4>
// // //               )}
// // //               {product.inStock === false ? (
// // //                 <span className='px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full'>Stock Out</span>
// // //               ) : (
// // //                 <span className='px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full'>In Stock</span>
// // //               )}
// // //             </div>

// // //             <p className='max-w-full sm:max-w-[555px] !text-[15px]'>{product.description}</p>

// // //             {/* Sizes */}
// // //             <div className='flex flex-col gap-4 my-4 mb-5'>
// // //               <h5 className='medium-14'>Size</h5>
// // //               <div className='flex flex-wrap gap-2'>
// // //                 {[...product.sizes].sort((a, b) => {
// // //                   const order = ["S", "M", "L", "XL", "XXL"]
// // //                   return order.indexOf(a) - order.indexOf(b)
// // //                 }).map((item, i) => (
// // //                   <motion.button
// // //                     key={i}
// // //                     type='button'
// // //                     onClick={() => onSelectSize(item)}
// // //                     whileHover={{ y: -2 }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     transition={{ type: "spring", stiffness: 300, damping: 22 }}
// // //                     className={`${item === size ? "bg-tertiary text-white ring-tertiary dark:bg-[#f3ece4] dark:text-[#211c19] dark:ring-[#f3ece4]" : "bg-white text-tertiary dark:text-white ring-[color:var(--line)] hover:ring-secondary/60"} ring-1 medium-14 h-11 min-w-11 px-3 rounded-xl transition-[background-color,color,box-shadow] duration-300`}
// // //                   >
// // //                     {item}
// // //                   </motion.button>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Colors — real swatches, filtered by the selected size */}
// // //             {size && hasColorOptions && (
// // //               <div className='flex flex-col gap-3 mb-5'>
// // //                 <h5 className='medium-14'>
// // //                   Color{color ? <span className='font-normal text-gray-30'> — {color}</span> : ""}
// // //                 </h5>
// // //                 <div className='flex flex-wrap gap-3'>
// // //                   {colorsForSelectedSize.map((item, i) => {
// // //                     const isSelected = item === color
// // //                     return (
// // //                       <motion.button
// // //                         key={i}
// // //                         type='button'
// // //                         onClick={() => setColor(item)}
// // //                         whileHover={{ scale: 1.12 }}
// // //                         whileTap={{ scale: 0.92 }}
// // //                         transition={{ type: "spring", stiffness: 300 }}
// // //                         title={item}
// // //                         className='relative flex flex-col items-center gap-1 group'
// // //                       >
// // //                         <span
// // //                           className={`w-9 h-9 rounded-full shadow-md transition-all duration-200 ${isSelected
// // //                               ? "ring-2 ring-offset-2 ring-offset-primary ring-tertiary dark:ring-white"
// // //                               : "ring-1 ring-slate-900/15 group-hover:ring-slate-900/40"
// // //                             }`}
// // //                           style={{ backgroundColor: resolveColorHex(item) }}
// // //                         ></span>
// // //                         <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap text-[10px] bg-slate-900 text-white px-1.5 py-0.5 rounded pointer-events-none'>
// // //                           {item}
// // //                         </span>
// // //                       </motion.button>
// // //                     )
// // //                   })}
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Buttons */}
// // //             <div className='flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-3'>
// // //               <motion.button
// // //                 whileHover={{ scale: product.inStock === false ? 1 : 1.03 }}
// // //                 whileTap={{ scale: product.inStock === false ? 1 : 0.97 }}
// // //                 transition={{ type: "spring", stiffness: 250 }}
// // //                 disabled={product.inStock === false}
// // //                 onClick={handleAddToCart}
// // //                 className={`btn-secondary !rounded-xl w-full sm:w-auto sm:min-w-[45%] flexCenter gap-x-2 capitalize min-h-12 ${product.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
// // //               >
// // //                 {product.inStock === false ? "Out of Stock" : "Add to Cart"} <TbShoppingBagPlus />
// // //               </motion.button>

// // //               <motion.button
// // //                 whileHover={{ scale: product.inStock === false ? 1 : 1.03 }}
// // //                 whileTap={{ scale: product.inStock === false ? 1 : 0.97 }}
// // //                 transition={{ type: "spring", stiffness: 250 }}
// // //                 disabled={product.inStock === false}
// // //                 onClick={handleBuyNow}
// // //                 className={`btn-dark !rounded-xl w-full sm:w-auto sm:min-w-[35%] flexCenter gap-x-2 capitalize min-h-12 ${product.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
// // //               >
// // //                 Buy Now <IoFlashSharp />
// // //               </motion.button>

// // //               <motion.button
// // //                 whileHover={{ scale: 1.1 }}
// // //                 whileTap={{ scale: 0.9 }}
// // //                 className='btn-light !rounded-xl !px-5 !py-3.5 min-h-12 text-secondary'
// // //               >
// // //                 <FaHeart />
// // //               </motion.button>
// // //             </div>

// // //             {/* Delivery */}
// // //             <div className='flex items-center mt-3 gap-x-2'>
// // //               <FaTruckFast className='text-lg shrink-0' />
// // //               <span className='medium-14'>Free Delivery on orders over {currency}500</span>
// // //             </div>

// // //             <hr className='w-2/3 my-3' />

// // //             <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
// // //               <p>Authenticity You Can Trust</p>
// // //               <p>Enjoy Cash on Delivery for Your Convenience</p>
// // //               <p>Secure Packaging for Safe Shipping</p>
// // //             </div>
// // //           </motion.div>

// // //         </motion.div>

// // //         <ProductDescription />
// // //         <ProductFeatures />
// // //         <RelatedProducts
// // //           category={product.category}
// // //           subCategory={product.subCategory}
// // //         />
// // //       </div>

// // //       <Footer />
// // //     </motion.div>
// // //   )
// // // }

// // // export default Product


// // import React, { useContext, useEffect, useState } from 'react'
// // import { motion } from 'framer-motion'
// // import { useParams } from 'react-router-dom'
// // import { toast } from 'react-toastify'
// // import { ShopContext } from '../context/ShopContext'
// // import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
// // import { FaHeart } from 'react-icons/fa'
// // import { TbShoppingBagPlus } from 'react-icons/tb'
// // import { IoFlashSharp } from 'react-icons/io5'
// // import ProductDescription from '../components/ProductDescription'
// // import ProductFeatures from '../components/ProductFeatures'
// // import RelatedProducts from '../components/RelatedProducts'
// // import Footer from '../components/Footer'
// // import { resolveColorHex } from '../utils/colorUtils'

// // const Product = () => {

// //   const { productId } = useParams()
// //   const { products, currency, addToCart, navigate, getEffectivePrice } = useContext(ShopContext)
// //   const [product, setProduct] = useState(null)
// //   const [image, setImage] = useState("")
// //   const [size, setSize] = useState("")
// //   const [color, setColor] = useState("")

// //   const fetchProductData = async () => {
// //     const selectedProduct = products.find((item) => item._id === productId)
// //     if (selectedProduct) {
// //       setProduct(selectedProduct)
// //       setImage(selectedProduct.image[0])
// //     }
// //   }

// //   useEffect(() => {
// //     fetchProductData()
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [productId, products])

// //   // Reset size/color selection whenever the product itself changes.
// //   useEffect(() => {
// //     setSize("")
// //     setColor("")
// //   }, [productId])

// //   if (!product) {
// //     return <div>...Loading</div>
// //   }

// //   // colorsBySize takes priority — only the colors available for the
// //   // currently selected size are shown. Falls back to the old flat "colors"
// //   // field for backward compatibility when colorsBySize has nothing for
// //   // this size (or doesn't exist at all).
// //   const colorsForSelectedSize = (() => {
// //     if (!size) return []
// //     const bySize = product.colorsBySize
// //     if (bySize) {
// //       const sizeColors = bySize instanceof Map ? bySize.get(size) : bySize[size]
// //       if (Array.isArray(sizeColors) && sizeColors.length > 0) {
// //         return sizeColors
// //       }
// //     }
// //     return product.colors || []
// //   })()

// //   const hasColorOptions = colorsForSelectedSize.length > 0

// //   const onSelectSize = (item) => {
// //     setSize(item)
// //     setColor("") // Changing size resets color since options depend on size
// //   }

// //   const validateSelection = () => {
// //     if (!size) {
// //       toast.error("Please select a size first")
// //       return false
// //     }
// //     if (hasColorOptions && !color) {
// //       toast.error("Please select a color")
// //       return false
// //     }
// //     return true
// //   }

// //   const handleAddToCart = () => {
// //     if (!validateSelection()) return
// //     addToCart(product._id, size, hasColorOptions ? color : undefined)
// //   }

// //   const handleBuyNow = () => {
// //     if (!validateSelection()) return
// //     const unitPrice = getEffectivePrice(product)
// //     navigate('/place-order', {
// //       state: {
// //         buyNow: {
// //           _id: product._id,
// //           name: product.name,
// //           image: product.image,
// //           size,
// //           color: hasColorOptions ? color : "",
// //           quantity: 1,
// //           price: unitPrice,
// //         },
// //       },
// //     })
// //   }

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //     >
// //       <div className='max-padd-container'>

// //         {/* Product data */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 22 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// //           className='flex flex-col gap-8 p-4 mb-6 sm:gap-12 sm:p-6 lg:p-8 lg:flex-row bg-primary rounded-3xl'
// //         >

// //           {/* Product image */}
// //           <motion.div
// //             initial={{ x: -30, opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             transition={{ duration: 0.8 }}
// //             className='flex flex-col-reverse flex-1 gap-3 sm:flex-row sm:gap-4'
// //           >
// //             <div className='flex gap-2 pb-2 overflow-x-auto sm:flex-col sm:gap-3 shrink-0 sm:overflow-x-visible sm:pb-0'>
// //               {product.image.map((item, i) => (
// //                 <motion.img
// //                   key={i}
// //                   onClick={() => setImage(item)}
// //                   src={item}
// //                   alt="productImg"
// //                   whileHover={{ scale: 1.04 }}
// //                   transition={{ duration: 0.3 }}
// //                   className={`w-14 sm:w-[76px] aspect-[5/6] object-cover rounded-xl cursor-pointer ring-2 transition-[box-shadow,opacity] duration-300 shrink-0 ${item === image ? 'ring-secondary' : 'ring-transparent opacity-80 hover:opacity-100'}`}
// //                 />
// //               ))}
// //             </div>

// //             <motion.div
// //               key={image}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.4 }}
// //               className='flex-1 min-w-0 max-w-full lg:max-w-[520px]'
// //             >
// //               <motion.img
// //                 src={image}
// //                 alt="productImg"
// //                 className='w-full aspect-[5/6] object-cover rounded-2xl bg-gray-10 shadow-soft'
// //               />
// //             </motion.div>
// //           </motion.div>

// //           {/* Product info */}
// //           <motion.div
// //             initial={{ x: 30, opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             transition={{ duration: 0.8 }}
// //             className='flex-[1.5] rounded-2xl lg:px-7'
// //           >
// //             <h3 className='!leading-tight h3 !mb-2'>{product.name}</h3>

// //             {/* Rating */}
// //             <div className='flex items-baseline gap-x-5'>
// //               <div className='flex items-center gap-x-2 text-secondary'>
// //                 <div className='flex gap-x-2 text-secondary'>
// //                   <FaStar />
// //                   <FaStar />
// //                   <FaStar />
// //                   <FaStar />
// //                   <FaStarHalfStroke />
// //                 </div>
// //                 <span className='medium-14'>(122)</span>
// //               </div>
// //             </div>

// //             <div className='flex flex-wrap items-baseline my-2 gap-x-3'>
// //               {product.offerPrice ? (
// //                 <>
// //                   <h4 className='!mb-0 !text-[18px] font-normal text-gray-400 line-through tabular-nums'>{currency}{product.regularPrice}.00</h4>
// //                   <h4 className='!mb-0 !text-[28px] text-secondary tabular-nums'>{currency}{product.offerPrice}.00</h4>
// //                 </>
// //               ) : (
// //                 <h4 className='!mb-0 !text-[28px] tabular-nums'>{currency}{product.regularPrice ?? product.price}.00</h4>
// //               )}
// //               {product.inStock === false ? (
// //                 <span className='px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full'>Stock Out</span>
// //               ) : (
// //                 <span className='px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full'>In Stock</span>
// //               )}
// //             </div>

// //             <p className='max-w-full sm:max-w-[555px] !text-[15px]'>{product.description}</p>

// //             {/* Sizes */}
// //             <div className='flex flex-col gap-4 my-4 mb-5'>
// //               <h5 className='medium-14'>Size</h5>
// //               <div className='flex flex-wrap gap-2'>
// //                 {[...product.sizes].sort((a, b) => {
// //                   const order = ["S", "M", "L", "XL", "XXL"]
// //                   return order.indexOf(a) - order.indexOf(b)
// //                 }).map((item, i) => (
// //                   <motion.button
// //                     key={i}
// //                     type='button'
// //                     onClick={() => onSelectSize(item)}
// //                     whileHover={{ y: -2 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     transition={{ type: "spring", stiffness: 300, damping: 22 }}
// //                     className={`${item === size ? "bg-tertiary text-white ring-tertiary dark:bg-[#f3ece4] dark:text-[#211c19] dark:ring-[#f3ece4]" : "bg-white text-tertiary dark:text-white ring-[color:var(--line)] hover:ring-secondary/60"} ring-1 medium-14 h-11 min-w-11 px-3 rounded-xl transition-[background-color,color,box-shadow] duration-300`}
// //                   >
// //                     {item}
// //                   </motion.button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Colors — real swatches, filtered by the selected size */}
// //             {size && hasColorOptions && (
// //               <div className='flex flex-col gap-3 mb-5'>
// //                 <h5 className='medium-14'>
// //                   Color{color ? <span className='font-normal text-gray-30'> — {color}</span> : ""}
// //                 </h5>
// //                 <div className='flex flex-wrap gap-3'>
// //                   {colorsForSelectedSize.map((item, i) => {
// //                     const isSelected = item === color
// //                     return (
// //                       <motion.button
// //                         key={i}
// //                         type='button'
// //                         onClick={() => setColor(item)}
// //                         whileHover={{ scale: 1.12 }}
// //                         whileTap={{ scale: 0.92 }}
// //                         transition={{ type: "spring", stiffness: 300 }}
// //                         title={item}
// //                         className='relative flex flex-col items-center gap-1 group'
// //                       >
// //                         <span
// //                           className={`w-9 h-9 rounded-full shadow-md transition-all duration-200 ${isSelected
// //                               ? "ring-2 ring-offset-2 ring-offset-primary ring-tertiary dark:ring-white"
// //                               : "ring-1 ring-slate-900/15 group-hover:ring-slate-900/40"
// //                             }`}
// //                           style={{ backgroundColor: resolveColorHex(item) }}
// //                         ></span>
// //                         <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap text-[10px] bg-slate-900 text-white px-1.5 py-0.5 rounded pointer-events-none'>
// //                           {item}
// //                         </span>
// //                       </motion.button>
// //                     )
// //                   })}
// //                 </div>
// //               </div>
// //             )}

// //             {/* Buttons */}
// //             <div className='flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-3'>
// //               <motion.button
// //                 whileHover={{ scale: product.inStock === false ? 1 : 1.03 }}
// //                 whileTap={{ scale: product.inStock === false ? 1 : 0.97 }}
// //                 transition={{ type: "spring", stiffness: 250 }}
// //                 disabled={product.inStock === false}
// //                 onClick={handleAddToCart}
// //                 className={`btn-secondary !rounded-xl flex-1 sm:flex-none sm:min-w-[45%] flexCenter gap-x-2 capitalize min-h-12 ${product.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
// //               >
// //                 {product.inStock === false ? "Out of Stock" : "Add to Cart"} <TbShoppingBagPlus />
// //               </motion.button>

// //               <motion.button
// //                 whileHover={{ scale: product.inStock === false ? 1 : 1.03 }}
// //                 whileTap={{ scale: product.inStock === false ? 1 : 0.97 }}
// //                 transition={{ type: "spring", stiffness: 250 }}
// //                 disabled={product.inStock === false}
// //                 onClick={handleBuyNow}
// //                 className={`btn-dark !rounded-xl flex-1 sm:flex-none sm:min-w-[35%] flexCenter gap-x-2 capitalize min-h-12 ${product.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
// //               >
// //                 Buy Now <IoFlashSharp />
// //               </motion.button>

// //               <motion.button
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.9 }}
// //                 className='btn-light !rounded-xl !px-5 !py-3.5 min-h-12 text-secondary flex-shrink-0'
// //               >
// //                 <FaHeart />
// //               </motion.button>
// //             </div>

// //             {/* Delivery */}
// //             <div className='flex items-center mt-3 gap-x-2'>
// //               <FaTruckFast className='text-lg shrink-0' />
// //               <span className='medium-14'>Free Delivery on orders over {currency}5000</span>
// //             </div>

// //             <hr className='w-2/3 my-3' />

// //             <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
// //               <p>Authenticity You Can Trust</p>
// //               <p>Enjoy Cash on Delivery for Your Convenience</p>
// //               <p>Secure Packaging for Safe Shipping</p>
// //             </div>
// //           </motion.div>

// //         </motion.div>

// //         <ProductDescription />
// //         <ProductFeatures />
// //         <RelatedProducts
// //           category={product.category}
// //           subCategory={product.subCategory}
// //         />
// //       </div>

// //       <Footer />
// //     </motion.div>
// //   )
// // }

// // export default Product



// import React, { useContext, useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { useParams } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { ShopContext } from '../context/ShopContext'
// import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
// import { FaHeart } from 'react-icons/fa'
// import { TbShoppingBagPlus } from 'react-icons/tb'
// import { IoFlashSharp } from 'react-icons/io5'
// import ProductDescription from '../components/ProductDescription'
// import ProductFeatures from '../components/ProductFeatures'
// import RelatedProducts from '../components/RelatedProducts'
// import Footer from '../components/Footer'
// import { resolveColorHex } from '../utils/colorUtils'

// const Product = () => {

//   const { productId } = useParams()
//   const { products, currency, addToCart, navigate, getEffectivePrice } = useContext(ShopContext)
//   const [product, setProduct] = useState(null)
//   const [image, setImage] = useState("")
//   const [size, setSize] = useState("")
//   const [color, setColor] = useState("")

//   const fetchProductData = async () => {
//     const selectedProduct = products.find((item) => item._id === productId)
//     if (selectedProduct) {
//       setProduct(selectedProduct)
//       setImage(selectedProduct.image[0])
//     }
//   }

//   useEffect(() => {
//     fetchProductData()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [productId, products])

//   // Reset size/color selection whenever the product itself changes.
//   useEffect(() => {
//     setSize("")
//     setColor("")
//   }, [productId])

//   if (!product) {
//     return <div>...Loading</div>
//   }

//   // colorsBySize takes priority — only the colors available for the
//   // currently selected size are shown. Falls back to the old flat "colors"
//   // field for backward compatibility when colorsBySize has nothing for
//   // this size (or doesn't exist at all).
//   const colorsForSelectedSize = (() => {
//     if (!size) return []
//     const bySize = product.colorsBySize
//     if (bySize) {
//       const sizeColors = bySize instanceof Map ? bySize.get(size) : bySize[size]
//       if (Array.isArray(sizeColors) && sizeColors.length > 0) {
//         return sizeColors
//       }
//     }
//     return product.colors || []
//   })()

//   const hasColorOptions = colorsForSelectedSize.length > 0

//   const onSelectSize = (item) => {
//     setSize(item)
//     setColor("") // Changing size resets color since options depend on size
//   }

//   const validateSelection = () => {
//     if (!size) {
//       toast.error("Please select a size first")
//       return false
//     }
//     if (hasColorOptions && !color) {
//       toast.error("Please select a color")
//       return false
//     }
//     return true
//   }

//   const handleAddToCart = () => {
//     if (!validateSelection()) return
//     addToCart(product._id, size, hasColorOptions ? color : undefined)
//   }

//   const handleBuyNow = () => {
//     if (!validateSelection()) return
//     const unitPrice = getEffectivePrice(product)
//     navigate('/place-order', {
//       state: {
//         buyNow: {
//           _id: product._id,
//           name: product.name,
//           image: product.image,
//           size,
//           color: hasColorOptions ? color : "",
//           quantity: 1,
//           price: unitPrice,
//         },
//       },
//     })
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className='pt-5 max-padd-container sm:pt-8'>

//         {/* Product data */}
//         <motion.div
//           initial={{ opacity: 0, y: 22 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className='flex flex-col gap-8 p-4 mb-6 sm:gap-10 sm:p-6 lg:p-8 lg:gap-10 xl:gap-14 lg:flex-row lg:items-start bg-primary rounded-3xl'
//         >

//           {/* Product image */}
//           <motion.div
//             initial={{ x: -30, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className='flex justify-center w-full gap-3 sm:gap-4 lg:justify-start lg:w-[46%] lg:shrink-0'
//           >
//             <div className='flex flex-col gap-2 sm:gap-3 shrink-0'>
//               {product.image.map((item, i) => (
//                 <motion.img
//                   key={i}
//                   onClick={() => setImage(item)}
//                   src={item}
//                   alt="productImg"
//                   whileHover={{ scale: 1.04 }}
//                   transition={{ duration: 0.3 }}
//                   className={`w-14 sm:w-[76px] aspect-[5/6] object-cover rounded-xl cursor-pointer ring-2 transition-[box-shadow,opacity] duration-300 ${item === image ? 'ring-secondary' : 'ring-transparent opacity-80 hover:opacity-100'}`}
//                 />
//               ))}
//             </div>

//             <motion.div
//               key={image}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//               className='flex-1 min-w-0 max-w-[520px]'
//             >
//               <motion.img
//                 src={image}
//                 alt="productImg"
//                 className='w-full aspect-[5/6] object-cover rounded-2xl bg-gray-10 shadow-soft'
//               />
//             </motion.div>
//           </motion.div>

//           {/* Product info */}
//           <motion.div
//             initial={{ x: 30, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className='flex-1 min-w-0 rounded-2xl'
//           >
//             <h3 className='!leading-tight h3 !mb-2'>{product.name}</h3>

//             {/* Rating */}
//             <div className='flex items-baseline gap-x-5'>
//               <div className='flex items-center gap-x-2 text-secondary'>
//                 <div className='flex gap-x-2 text-secondary'>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStarHalfStroke />
//                 </div>
//                 <span className='medium-14'>(122)</span>
//               </div>
//             </div>

//             <div className='flex flex-wrap items-baseline my-2 gap-x-3'>
//               {product.offerPrice ? (
//                 <>
//                   <h4 className='!mb-0 !text-[18px] font-normal text-gray-400 line-through tabular-nums'>{currency}{product.regularPrice}.00</h4>
//                   <h4 className='!mb-0 !text-[28px] text-secondary tabular-nums'>{currency}{product.offerPrice}.00</h4>
//                 </>
//               ) : (
//                 <h4 className='!mb-0 !text-[28px] tabular-nums'>{currency}{product.regularPrice ?? product.price}.00</h4>
//               )}
//               {product.inStock === false ? (
//                 <span className='px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full'>Stock Out</span>
//               ) : (
//                 <span className='px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full'>In Stock</span>
//               )}
//             </div>

//             <p className='max-w-full sm:max-w-[555px] !text-[15px]'>{product.description}</p>

//             {/* Sizes */}
//             <div className='flex flex-col gap-4 my-4 mb-5'>
//               <h5 className='medium-14'>Size</h5>
//               <div className='flex flex-wrap gap-2'>
//                 {[...product.sizes].sort((a, b) => {
//                   const order = ["S", "M", "L", "XL", "XXL"]
//                   return order.indexOf(a) - order.indexOf(b)
//                 }).map((item, i) => (
//                   <motion.button
//                     key={i}
//                     type='button'
//                     onClick={() => onSelectSize(item)}
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 22 }}
//                     className={`${item === size ? "bg-tertiary text-white ring-tertiary dark:bg-[#f3ece4] dark:text-[#211c19] dark:ring-[#f3ece4]" : "bg-white text-tertiary dark:text-white ring-[color:var(--line)] hover:ring-secondary/60"} ring-1 medium-14 h-11 min-w-11 px-3 rounded-xl transition-[background-color,color,box-shadow] duration-300`}
//                   >
//                     {item}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             {/* Colors — real swatches, filtered by the selected size */}
//             {size && hasColorOptions && (
//               <div className='flex flex-col gap-3 mb-5'>
//                 <h5 className='medium-14'>
//                   Color{color ? <span className='font-normal text-gray-30'> — {color}</span> : ""}
//                 </h5>
//                 <div className='flex flex-wrap gap-3'>
//                   {colorsForSelectedSize.map((item, i) => {
//                     const isSelected = item === color
//                     return (
//                       <motion.button
//                         key={i}
//                         type='button'
//                         onClick={() => setColor(item)}
//                         whileHover={{ scale: 1.12 }}
//                         whileTap={{ scale: 0.92 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                         title={item}
//                         className='relative flex flex-col items-center gap-1 group'
//                       >
//                         <span
//                           className={`w-9 h-9 rounded-full shadow-md transition-all duration-200 ${isSelected
//                               ? "ring-2 ring-offset-2 ring-offset-primary ring-tertiary dark:ring-white"
//                               : "ring-1 ring-slate-900/15 group-hover:ring-slate-900/40"
//                             }`}
//                           style={{ backgroundColor: resolveColorHex(item) }}
//                         ></span>
//                         <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap text-[10px] bg-slate-900 text-white px-1.5 py-0.5 rounded pointer-events-none'>
//                           {item}
//                         </span>
//                       </motion.button>
//                     )
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Buttons */}
//             <div className='grid grid-cols-[1fr_auto] gap-3 sm:grid-cols-[1.35fr_1fr_auto]'>
//               <motion.button
//                 whileHover={{ scale: product.inStock === false ? 1 : 1.03 }}
//                 whileTap={{ scale: product.inStock === false ? 1 : 0.97 }}
//                 transition={{ type: "spring", stiffness: 250 }}
//                 disabled={product.inStock === false}
//                 onClick={handleAddToCart}
//                 className={`btn-secondary !rounded-xl w-full col-span-2 sm:col-span-1 flexCenter gap-x-2 capitalize min-h-12 ${product.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {product.inStock === false ? "Out of Stock" : "Add to Cart"} <TbShoppingBagPlus />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: product.inStock === false ? 1 : 1.03 }}
//                 whileTap={{ scale: product.inStock === false ? 1 : 0.97 }}
//                 transition={{ type: "spring", stiffness: 250 }}
//                 disabled={product.inStock === false}
//                 onClick={handleBuyNow}
//                 className={`btn-dark !rounded-xl w-full flexCenter gap-x-2 capitalize min-h-12 ${product.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 Buy Now <IoFlashSharp />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className='btn-light !rounded-xl !px-5 !py-3.5 min-h-12 text-secondary flexCenter'
//               >
//                 <FaHeart />
//               </motion.button>
//             </div>

//             {/* Delivery */}
//             <div className='flex items-center mt-3 gap-x-2'>
//               <FaTruckFast className='text-lg shrink-0' />
//               <span className='medium-14'>Free Delivery on orders over {currency}5000</span>
//             </div>

//             <hr className='w-2/3 my-3' />

//             <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
//               <p>Authenticity You Can Trust</p>
//               <p>Enjoy Cash on Delivery for Your Convenience</p>
//               <p>Secure Packaging for Safe Shipping</p>
//             </div>
//           </motion.div>

//         </motion.div>

//         <ProductDescription />
//         <ProductFeatures />
//         <RelatedProducts
//           category={product.category}
//           subCategory={product.subCategory}
//         />
//       </div>

//       <Footer />
//     </motion.div>
//   )
// }

// export default Product



import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'
import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { IoFlashSharp } from 'react-icons/io5'
import RelatedProducts from '../components/RelatedProducts'
import Footer from '../components/Footer'
import { resolveColorHex } from '../utils/colorUtils'

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart, navigate, getEffectivePrice } = useContext(ShopContext)
  const [product, setProduct] = useState(null)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId)
    if (selectedProduct) {
      setProduct(selectedProduct)
      setImage(selectedProduct.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, products])

  // Reset size/color selection whenever the product itself changes.
  useEffect(() => {
    setSize("")
    setColor("")
  }, [productId])

  if (!product) {
    return <div>...Loading</div>
  }

  // colorsBySize takes priority — only the colors available for the
  // currently selected size are shown. Falls back to the old flat "colors"
  // field for backward compatibility when colorsBySize has nothing for
  // this size (or doesn't exist at all).
  const colorsForSelectedSize = (() => {
    if (!size) return []
    const bySize = product.colorsBySize
    if (bySize) {
      const sizeColors = bySize instanceof Map ? bySize.get(size) : bySize[size]
      if (Array.isArray(sizeColors) && sizeColors.length > 0) {
        return sizeColors
      }
    }
    return product.colors || []
  })()

  const hasColorOptions = colorsForSelectedSize.length > 0

  const onSelectSize = (item) => {
    setSize(item)
    setColor("") // Changing size resets color since options depend on size
  }

  const validateSelection = () => {
    if (!size) {
      toast.error("Please select a size first")
      return false
    }
    if (hasColorOptions && !color) {
      toast.error("Please select a color")
      return false
    }
    return true
  }

  const handleAddToCart = () => {
    if (!validateSelection()) return
    addToCart(product._id, size, hasColorOptions ? color : undefined)
  }

  const handleBuyNow = () => {
    if (!validateSelection()) return
    const unitPrice = getEffectivePrice(product)
    navigate('/place-order', {
      state: {
        buyNow: {
          _id: product._id,
          name: product.name,
          image: product.image,
          size,
          color: hasColorOptions ? color : "",
          quantity: 1,
          price: unitPrice,
        },
      },
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='pt-5 max-padd-container sm:pt-8'>

        {/* Product data */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className='flex flex-col gap-8 p-4 mb-6 sm:gap-10 sm:p-6 lg:p-8 lg:gap-10 xl:gap-14 lg:flex-row lg:items-start bg-primary rounded-3xl'
        >

          {/* Product image */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex justify-center w-full gap-3 sm:gap-4 lg:justify-start lg:w-[46%] lg:shrink-0'
          >
            <div className='flex flex-col gap-2 sm:gap-3 shrink-0'>
              {product.image.map((item, i) => (
                <motion.img
                  key={i}
                  onClick={() => setImage(item)}
                  src={item}
                  alt="productImg"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 sm:w-[76px] aspect-[5/6] object-cover rounded-xl cursor-pointer ring-2 transition-[box-shadow,opacity] duration-300 ${item === image ? 'ring-secondary' : 'ring-transparent opacity-80 hover:opacity-100'}`}
                />
              ))}
            </div>

            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='flex-1 min-w-0 max-w-[520px]'
            >
              <motion.img
                src={image}
                alt="productImg"
                className='w-full aspect-[5/6] object-cover rounded-2xl bg-gray-10 shadow-soft'
              />
            </motion.div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex-1 min-w-0 rounded-2xl'
          >
            <h3 className='!leading-tight h3 !mb-2'>{product.name}</h3>

            {/* Rating */}
            <div className='flex items-baseline gap-x-5'>
              <div className='flex items-center gap-x-2 text-secondary'>
                <div className='flex gap-x-2 text-secondary'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className='medium-14'>(122)</span>
              </div>
            </div>

            <div className='flex flex-wrap items-baseline my-2 gap-x-3'>
              {product.offerPrice ? (
                <>
                  <h4 className='!mb-0 !text-[18px] font-normal text-gray-400 line-through tabular-nums'>{currency}{product.regularPrice}.00</h4>
                  <h4 className='!mb-0 !text-[28px] text-secondary tabular-nums'>{currency}{product.offerPrice}.00</h4>
                </>
              ) : (
                <h4 className='!mb-0 !text-[28px] tabular-nums'>{currency}{product.regularPrice ?? product.price}.00</h4>
              )}
              {product.inStock === false ? (
                <span className='px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full'>Stock Out</span>
              ) : (
                <span className='px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full'>In Stock</span>
              )}
            </div>

            <p className='max-w-full sm:max-w-[555px] !text-[15px]'>{product.description}</p>

            {/* Sizes */}
            <div className='flex flex-col gap-4 my-4 mb-5'>
              <h5 className='medium-14'>Size</h5>
              <div className='flex flex-wrap gap-2'>
                {[...product.sizes].sort((a, b) => {
                  const order = ["S", "M", "L", "XL", "XXL"]
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item, i) => (
                  <motion.button
                    key={i}
                    type='button'
                    onClick={() => onSelectSize(item)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`${item === size ? "bg-tertiary text-white ring-tertiary dark:bg-[#f3ece4] dark:text-[#211c19] dark:ring-[#f3ece4]" : "bg-white text-tertiary dark:text-white ring-[color:var(--line)] hover:ring-secondary/60"} ring-1 medium-14 h-11 min-w-11 px-3 rounded-xl transition-[background-color,color,box-shadow] duration-300`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Colors — real swatches, filtered by the selected size */}
            {size && hasColorOptions && (
              <div className='flex flex-col gap-3 mb-5'>
                <h5 className='medium-14'>
                  Color{color ? <span className='font-normal text-gray-30'> — {color}</span> : ""}
                </h5>
                <div className='flex flex-wrap gap-3'>
                  {colorsForSelectedSize.map((item, i) => {
                    const isSelected = item === color
                    return (
                      <motion.button
                        key={i}
                        type='button'
                        onClick={() => setColor(item)}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        title={item}
                        className='relative flex flex-col items-center gap-1 group'
                      >
                        <span
                          className={`w-9 h-9 rounded-full shadow-md transition-all duration-200 ${isSelected
                              ? "ring-2 ring-offset-2 ring-offset-primary ring-tertiary dark:ring-white"
                              : "ring-1 ring-slate-900/15 group-hover:ring-slate-900/40"
                            }`}
                          style={{ backgroundColor: resolveColorHex(item) }}
                        ></span>
                        <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap text-[10px] bg-slate-900 text-white px-1.5 py-0.5 rounded pointer-events-none'>
                          {item}
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-[1.35fr_1fr]'>
              <motion.button
                whileHover={{ scale: product.inStock === false ? 1 : 1.03 }}
                whileTap={{ scale: product.inStock === false ? 1 : 0.97 }}
                transition={{ type: "spring", stiffness: 250 }}
                disabled={product.inStock === false}
                onClick={handleAddToCart}
                className={`btn-secondary !rounded-xl w-full sm:col-span-1 flexCenter gap-x-2 capitalize min-h-12 ${product.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {product.inStock === false ? "Out of Stock" : "Add to Cart"} <TbShoppingBagPlus />
              </motion.button>

              <motion.button
                whileHover={{ scale: product.inStock === false ? 1 : 1.03 }}
                whileTap={{ scale: product.inStock === false ? 1 : 0.97 }}
                transition={{ type: "spring", stiffness: 250 }}
                disabled={product.inStock === false}
                onClick={handleBuyNow}
                className={`btn-dark !rounded-xl w-full flexCenter gap-x-2 capitalize min-h-12 ${product.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Buy Now <IoFlashSharp />
              </motion.button>
            </div>

            {/* Delivery */}
            <div className='flex items-center mt-3 gap-x-2'>
              <FaTruckFast className='text-lg shrink-0' />
              <span className='medium-14'>Free Delivery on orders over {currency}5000</span>
            </div>

            <hr className='w-2/3 my-3' />

            <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
              <p>Authenticity You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Secure Packaging for Safe Shipping</p>
            </div>
          </motion.div>

        </motion.div>

        <RelatedProducts
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>

      <Footer />
    </motion.div>
  )
}

export default Product