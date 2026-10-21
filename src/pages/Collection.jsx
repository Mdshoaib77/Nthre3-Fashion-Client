// import React, { useContext, useEffect, useMemo, useState } from 'react'
// import { motion } from 'framer-motion'
// import { useSearchParams } from 'react-router-dom'
// import ShowSearch from '../components/ShowSearch'
// import { ShopContext } from '../context/ShopContext'
// import Item from '../components/Item'
// import Footer from '../components/Footer'

// const fadeUp = {
//   hidden: { opacity: 0, y: 22 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
//   }
// }

// const Collection = () => {

//   const { products, search, showSearch, getEffectivePrice, topLevelCategories, getSubcategoriesFor, categoriesLoading } = useContext(ShopContext)
//   const [searchParams] = useSearchParams()
//   const [category, setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])
//   const [sortType, setSortType] = useState('relevant')
//   const [filteredProducts, setFilteredProducts] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 10

//   // Dynamic category/subcategory options (replaces the old hard-coded
//   // ["Men","Women","Kids"] / ["Topwear","Bottomwear","Winterwear"] arrays).
//   // Subcategory checkboxes show every subcategory under the currently
//   // selected categories, or all subcategories if none are selected yet.
//   const categoryOptions = topLevelCategories.map((c) => c.name)
//   const subCategoryOptions = useMemo(() => {
//     const sourceCategories = category.length > 0 ? category : categoryOptions
//     const names = new Set()
//     sourceCategories.forEach((catName) => {
//       getSubcategoriesFor(catName).forEach((sub) => names.add(sub.name))
//     })
//     return Array.from(names)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [category, topLevelCategories])

//   // Read ?category=<slug>&subcategory=<slug> from the URL (e.g. when a user
//   // clicks a category card on the homepage) and translate them into the
//   // filter's product category/subcategory NAMEs. Runs once categories have
//   // loaded, and whenever the URL search params change.
//   useEffect(() => {
//     if (categoriesLoading || topLevelCategories.length === 0) return

//     const categorySlug = searchParams.get('category')
//     const subcategorySlug = searchParams.get('subcategory')

//     if (categorySlug) {
//       const matchedCategory = topLevelCategories.find((c) => c.slug === categorySlug)
//       if (matchedCategory) {
//         setCategory([matchedCategory.name])

//         if (subcategorySlug) {
//           const matchedSub = getSubcategoriesFor(matchedCategory.name).find((s) => s.slug === subcategorySlug)
//           if (matchedSub) setSubCategory([matchedSub.name])
//         }
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [categoriesLoading, topLevelCategories, searchParams])

//   const toggleFilter = (value, setState) => {
//     setState((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     )
//   }

//   const applyFilter = () => {
//     let filtered = [...products]

//     if (search && showSearch) {
//       filtered = filtered.filter((product) =>
//         product.name.toLowerCase().includes(search.toLowerCase())
//       )
//     }

//     if (category.length) {
//       filtered = filtered.filter((product) =>
//         category.includes(product.category)
//       )
//     }

//     if (subCategory.length) {
//       filtered = filtered.filter((product) =>
//         subCategory.includes(product.subCategory)
//       )
//     }

//     return filtered
//   }

//   const applySorting = (productsList) => {
//     switch (sortType) {
//       case "low":
//         return productsList.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b))
//       case "high":
//         return productsList.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a))
//       default:
//         return productsList
//     }
//   }

//   useEffect(() => {
//     let filtered = applyFilter()
//     let sorted = applySorting(filtered)
//     setFilteredProducts(sorted)
//     setCurrentPage(1)
//   }, [category, subCategory, sortType, products, search, showSearch])

//   const getPaginatedProducts = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage
//     const endIndex = startIndex + itemsPerPage
//     return filteredProducts.slice(startIndex, endIndex)
//   }

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className='max-padd-container !px-0'
//     >
//       <div className='flex flex-col gap-8 mb-16 sm:flex-row'>

//         {/* Filter Sidebar */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className='p-4 pt-8 pl-6 min-w-72 bg-primary lg:pl-12 rounded-r-3xl'
//         >
//           <ShowSearch />

//           <motion.div variants={fadeUp} className='px-5 py-4 mt-4 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
//             <h5 className='mb-4 h5'>Categories</h5>
//             <div className='flex flex-col gap-2 text-sm font-light'>
//               {categoryOptions.length === 0 ? (
//                 <p className='pr-5 text-xs text-gray-30'>{categoriesLoading ? 'Loading...' : 'No categories yet.'}</p>
//               ) : (
//                 categoryOptions.map((cat) => (
//                   <label key={cat} className='flex items-center gap-2.5 cursor-pointer medium-14 text-gray-30 transition-colors duration-200 hover:text-tertiary dark:hover:text-white'>
//                     <input
//                       onChange={(e) => toggleFilter(e.target.value, setCategory)}
//                       checked={category.includes(cat)}
//                       type="checkbox"
//                       value={cat}
//                       className='w-3.5 h-3.5'
//                     />
//                     {cat}
//                   </label>
//                 ))
//               )}
//             </div>
//           </motion.div>

//           <motion.div variants={fadeUp} className='px-5 py-4 mt-5 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
//             <h5 className='mb-4 h5'>Types</h5>
//             <div className='flex flex-col gap-2 text-sm font-light'>
//               {subCategoryOptions.length === 0 ? (
//                 <p className='pr-5 text-xs text-gray-30'>No subcategories yet.</p>
//               ) : (
//                 subCategoryOptions.map((subCat) => (
//                   <label key={subCat} className='flex items-center gap-2.5 cursor-pointer medium-14 text-gray-30 transition-colors duration-200 hover:text-tertiary dark:hover:text-white'>
//                     <input
//                       onChange={(e) => toggleFilter(e.target.value, setSubCategory)}
//                       checked={subCategory.includes(subCat)}
//                       type="checkbox"
//                       value={subCat}
//                       className='w-3.5 h-3.5'
//                     />
//                     {subCat}
//                   </label>
//                 ))
//               )}
//             </div>
//           </motion.div>

//           <motion.div variants={fadeUp} className='px-5 py-4 mt-5 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
//             <h5 className='mb-4 h5'>Sort By</h5>
//             <select
//               onChange={(e) => setSortType(e.target.value)}
//               className='w-full h-10 px-3 bg-white border rounded-xl outline-none cursor-pointer dark:bg-[var(--surface)] border-[color:var(--line)] text-tertiary dark:text-white medium-14 transition-shadow focus:ring-2 focus:ring-secondary/40'
//             >
//               <option value="relevant">Relevant</option>
//               <option value="low">Low</option>
//               <option value="high">High</option>
//             </select>
//           </motion.div>
//         </motion.div>

//         {/* Product Grid */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className='flex-1 min-w-0 p-4 sm:p-5 bg-primary rounded-l-3xl'
//         >
//           <div className='grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
//             {getPaginatedProducts().length > 0 ? (
//               getPaginatedProducts().map((product) => (
//                 <Item key={product._id} product={product} />
//               ))
//             ) : (
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className='capitalize'
//               >
//                 No products found for selected filters.
//               </motion.p>
//             )}
//           </div>

//           {/* Pagination */}
//           <div className='flex-wrap gap-4 mb-10 flexCenter mt-14'>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((prev) => prev - 1)}
//               className={`${currentPage === 1 && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
//             >
//               Previous
//             </motion.button>

//             {Array.from({ length: totalPages }, (_, index) => (
//               <motion.button
//                 key={index + 1}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`${currentPage === index + 1 && "!bg-tertiary text-white"} btn-light !py-1 !px-3`}
//               >
//                 {index + 1}
//               </motion.button>
//             ))}

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((prev) => prev + 1)}
//               className={`${currentPage === totalPages && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
//             >
//               Next
//             </motion.button>
//           </div>
//         </motion.div>

//       </div>

//       <Footer />
//     </motion.div>
//   )
// }

// export default Collection

import React, { useContext, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import ShowSearch from '../components/ShowSearch'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'
import Footer from '../components/Footer'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const Collection = () => {

  const { products, search, showSearch, getEffectivePrice, topLevelCategories, getSubcategoriesFor, categoriesLoading } = useContext(ShopContext)
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Dynamic category/subcategory options (replaces the old hard-coded
  // ["Men","Women","Kids"] / ["Topwear","Bottomwear","Winterwear"] arrays).
  // Subcategory checkboxes show every subcategory under the currently
  // selected categories, or all subcategories if none are selected yet.
  const categoryOptions = topLevelCategories.map((c) => c.name)
  const subCategoryOptions = useMemo(() => {
    const sourceCategories = category.length > 0 ? category : categoryOptions
    const names = new Set()
    sourceCategories.forEach((catName) => {
      getSubcategoriesFor(catName).forEach((sub) => names.add(sub.name))
    })
    return Array.from(names)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, topLevelCategories])

  // Read ?category=<slug>&subcategory=<slug> from the URL (e.g. when a user
  // clicks a category card on the homepage) and translate them into the
  // filter's product category/subcategory NAMEs. Runs once categories have
  // loaded, and whenever the URL search params change.
  useEffect(() => {
    if (categoriesLoading || topLevelCategories.length === 0) return

    const categorySlug = searchParams.get('category')
    const subcategorySlug = searchParams.get('subcategory')

    if (categorySlug) {
      const matchedCategory = topLevelCategories.find((c) => c.slug === categorySlug)
      if (matchedCategory) {
        setCategory([matchedCategory.name])

        if (subcategorySlug) {
          const matchedSub = getSubcategoriesFor(matchedCategory.name).find((s) => s.slug === subcategorySlug)
          if (matchedSub) setSubCategory([matchedSub.name])
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesLoading, topLevelCategories, searchParams])

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const applyFilter = () => {
    let filtered = [...products]

    if (search && showSearch) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      )
    }

    if (subCategory.length) {
      filtered = filtered.filter((product) =>
        subCategory.includes(product.subCategory)
      )
    }

    return filtered
  }

  const applySorting = (productsList) => {
    switch (sortType) {
      case "low":
        return productsList.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b))
      case "high":
        return productsList.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a))
      default:
        return productsList
    }
  }

  useEffect(() => {
    let filtered = applyFilter()
    let sorted = applySorting(filtered)
    setFilteredProducts(sorted)
    setCurrentPage(1)
  }, [category, subCategory, sortType, products, search, showSearch])

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredProducts.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Same container as the header, so everything lines up with the logo / nav edges */}
      <div className='pt-5 pb-12 max-padd-container sm:pt-8 sm:pb-16'>
      <div className='flex flex-col gap-5 lg:flex-row lg:gap-6'>

        {/* Filter Sidebar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className='p-4 sm:p-5 lg:w-[290px] xl:w-[300px] lg:shrink-0 lg:self-start bg-primary rounded-3xl'
        >
          <ShowSearch />

          {/* phones: 1 column, tablets: 2 columns, desktop: stacked in the sidebar */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5'>

          <motion.div variants={fadeUp} className='px-5 py-4 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
            <h5 className='mb-4 h5'>Categories</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {categoryOptions.length === 0 ? (
                <p className='pr-5 text-xs text-gray-30'>{categoriesLoading ? 'Loading...' : 'No categories yet.'}</p>
              ) : (
                categoryOptions.map((cat) => (
                  <label key={cat} className='flex items-center gap-2.5 cursor-pointer medium-14 text-gray-30 transition-colors duration-200 hover:text-tertiary dark:hover:text-white'>
                    <input
                      onChange={(e) => toggleFilter(e.target.value, setCategory)}
                      checked={category.includes(cat)}
                      type="checkbox"
                      value={cat}
                      className='w-3.5 h-3.5'
                    />
                    {cat}
                  </label>
                ))
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className='px-5 py-4 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
            <h5 className='mb-4 h5'>Types</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {subCategoryOptions.length === 0 ? (
                <p className='pr-5 text-xs text-gray-30'>No subcategories yet.</p>
              ) : (
                subCategoryOptions.map((subCat) => (
                  <label key={subCat} className='flex items-center gap-2.5 cursor-pointer medium-14 text-gray-30 transition-colors duration-200 hover:text-tertiary dark:hover:text-white'>
                    <input
                      onChange={(e) => toggleFilter(e.target.value, setSubCategory)}
                      checked={subCategory.includes(subCat)}
                      type="checkbox"
                      value={subCat}
                      className='w-3.5 h-3.5'
                    />
                    {subCat}
                  </label>
                ))
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className='px-5 py-4 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
            <h5 className='mb-4 h5'>Sort By</h5>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className='w-full h-10 px-3 bg-white border rounded-xl outline-none cursor-pointer dark:bg-[var(--surface)] border-[color:var(--line)] text-tertiary dark:text-white medium-14 transition-shadow focus:ring-2 focus:ring-secondary/40'
            >
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </motion.div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className='flex-1 min-w-0 p-4 sm:p-5 bg-primary rounded-3xl'
        >
          <div className='grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5'>
            {getPaginatedProducts().length > 0 ? (
              getPaginatedProducts().map((product) => (
                <Item key={product._id} product={product} />
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='capitalize col-span-full'
              >
                No products found for selected filters.
              </motion.p>
            )}
          </div>

          {/* Pagination */}
          <div className='flex-wrap gap-3 mt-10 mb-4 sm:gap-4 flexCenter sm:mt-14'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`${currentPage === 1 && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
            >
              Previous
            </motion.button>

            {Array.from({ length: totalPages }, (_, index) => (
              <motion.button
                key={index + 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(index + 1)}
                className={`${currentPage === index + 1 && "!bg-tertiary text-white"} btn-light !py-1 !px-3`}
              >
                {index + 1}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`${currentPage === totalPages && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
            >
              Next
            </motion.button>
          </div>
        </motion.div>

      </div>
      </div>

      <Footer />
    </motion.div>
  )
}

export default Collection