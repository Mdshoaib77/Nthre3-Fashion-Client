import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ShopContext } from '../context/ShopContext'
import Footer from '../components/Footer'

// Step 2 of the homepage drill-down: /categories/:slug
//
// Shown after a user clicks a top-level category card (Men, Women, Kids...).
// Lists that category's subcategories (T-Shirts, Shirts, Jeans...), still
// pulled dynamically from the database via ShopContext. Clicking a
// subcategory goes to /collection?category=&subcategory=.
//
// If the category turns out to have zero subcategories (e.g. the admin
// deleted them after the homepage card was rendered, or someone lands on
// this URL directly), we skip straight to the filtered product list instead
// of showing an empty screen.
const SubcategoryCard = ({ item, to }) => {
  const [imgError, setImgError] = React.useState(false)
  const hasImage = item.image && !imgError

  return (
    <Link to={to} className='block group'>
      <div className='overflow-hidden bg-gray-10 rounded-2xl aspect-[3/4] ring-1 ring-[color:var(--line)] transition-shadow duration-500 group-hover:shadow-lift'>
        {hasImage ? (
          <motion.img
            src={item.image}
            alt={item.name}
            onError={() => setImgError(true)}
            className='object-cover w-full h-full'
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <div className='flex items-center justify-center w-full h-full'>
            <span className='px-4 text-sm text-center text-gray-30 uppercase tracking-widest'>{item.name}</span>
          </div>
        )}
      </div>
      <div className='flex items-center justify-between pt-3'>
        <p className='text-[13px] font-medium tracking-[0.16em] uppercase text-tertiary dark:text-darktext'>{item.name}</p>
        <FaArrowRightLong className='text-xs transition-all duration-500 opacity-0 -translate-x-2 text-secondary group-hover:opacity-100 group-hover:translate-x-0' />
      </div>
    </Link>
  )
}

const CategoryBrowseSkeleton = () => (
  <div className='py-10 animate-pulse max-padd-container'>
    <div className='w-1/3 h-8 mb-8 rounded bg-gray-10' />
    <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className='rounded-2xl aspect-[3/4] bg-gray-10' />
      ))}
    </div>
  </div>
)

const CategoryBrowse = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { topLevelCategories, getSubcategoriesFor, categoriesLoading, categoriesError } = useContext(ShopContext)

  const topCategory = topLevelCategories.find((c) => c.slug === slug)
  const subcategories = topCategory ? getSubcategoriesFor(topCategory.name) : []

  // If this category has no subcategories, don't show an empty drill-down
  // screen — go straight to the filtered product list, same as if the user
  // had clicked straight through.
  useEffect(() => {
    if (categoriesLoading) return
    if (topCategory && subcategories.length === 0) {
      navigate(`/collection?category=${encodeURIComponent(topCategory.slug)}`, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesLoading, topCategory, subcategories.length])

  if (categoriesLoading) {
    return <CategoryBrowseSkeleton />
  }

  if (categoriesError) {
    return (
      <div className='py-20 text-center max-padd-container'>
        <p className='text-sm text-gray-30'>Couldn't load categories. Please try again shortly.</p>
      </div>
    )
  }

  if (!topCategory) {
    return (
      <div className='py-20 text-center max-padd-container'>
        <p className='text-sm text-gray-30'>We couldn't find that category.</p>
        <Link to='/' className='inline-block mt-4 text-sm underline text-secondary'>Back to home</Link>
      </div>
    )
  }

  // Zero-subcategory case is handled by the redirect effect above; render
  // nothing in that brief instant to avoid a flash of an empty grid.
  if (subcategories.length === 0) {
    return null
  }

  return (
    <>
      <section className='pt-8 pb-16 max-padd-container'>
        <div className='flex items-baseline justify-between mb-8'>
          <h1 className='font-display font-medium tracking-tight text-[30px] md:text-[42px] leading-tight'>{topCategory.name}</h1>
          <Link
            to={`/collection?category=${encodeURIComponent(topCategory.slug)}`}
            className='text-xs font-medium tracking-[0.14em] uppercase text-gray-30 transition-colors duration-300 hover:text-secondary'
          >
            Shop All {topCategory.name}
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'
        >
          {subcategories.map((sub) => (
            <SubcategoryCard
              key={sub._id}
              item={sub}
              to={`/collection?category=${encodeURIComponent(topCategory.slug)}&subcategory=${encodeURIComponent(sub.slug)}`}
            />
          ))}
        </motion.div>
      </section>
      <Footer />
    </>
  )
}

export default CategoryBrowse
