import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ShopContext } from '../context/ShopContext'

// Single editorial top-level category card: large image, understated
// caption underneath, subtle scale-on-hover. No borders, no gradients, no
// heavy shadows — matches the "premium fashion brand" visual direction.
const CategoryCard = ({ item, to }) => {
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
          // Graceful fallback when a category has no image yet — keeps the
          // layout intact instead of showing a broken image.
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

// Skeleton placeholder shown while categories are loading, so the section
// never causes a layout jump once real data arrives.
const CategoryShowcaseSkeleton = () => (
  <div className='animate-pulse'>
    <div className='w-1/3 h-7 mb-6 rounded-lg bg-gray-10' />
    <div className='grid grid-cols-2 gap-5 sm:grid-cols-4'>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className='rounded-2xl aspect-[3/4] bg-gray-10' />
      ))}
    </div>
  </div>
)

// Homepage "Shop by Category" section — step 1 of the two-step drill-down.
//
// Shows ONLY the top-level categories (Men, Women, Kids, or anything else
// the admin has created — no code changes needed) as large image cards.
// Clicking a card does NOT jump straight to the product list:
//   - If the category has subcategories, it goes to /categories/:slug,
//     which lists those subcategories (see CategoryBrowse.jsx).
//   - If the category has zero subcategories, it goes straight to
//     /collection?category=:slug, since there's nothing to drill into.
const CategoryShowcase = () => {
  const { topLevelCategories, getSubcategoriesFor, categoriesLoading, categoriesError } = useContext(ShopContext)

  if (categoriesLoading) {
    return (
      <section className='pt-6 pb-16 max-padd-container'>
        <CategoryShowcaseSkeleton />
      </section>
    )
  }

  if (categoriesError) {
    // Fail gracefully — never break the rest of the homepage.
    return null
  }

  if (topLevelCategories.length === 0) {
    return (
      <section className='pt-6 pb-16 text-center max-padd-container'>
        <p className='text-sm text-gray-30'>Categories are coming soon.</p>
      </section>
    )
  }

  return (
    <section className='pt-6 pb-16 max-padd-container'>
      <div className='flex items-baseline justify-between mb-6'>
        <h3 className='font-display font-medium tracking-tight text-[28px] md:text-[36px] leading-tight'>
          Shop<span className='italic text-secondary'> by Category</span>
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'
      >
        {topLevelCategories.map((topCategory) => {
          const hasSubcategories = getSubcategoriesFor(topCategory.name).length > 0
          const to = hasSubcategories
            ? `/categories/${encodeURIComponent(topCategory.slug)}`
            : `/collection?category=${encodeURIComponent(topCategory.slug)}`

          return <CategoryCard key={topCategory._id} item={topCategory} to={to} />
        })}
      </motion.div>
    </section>
  )
}

export default CategoryShowcase
