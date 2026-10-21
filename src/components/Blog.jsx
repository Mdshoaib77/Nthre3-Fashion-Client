import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import { blogs } from '../assets/data'
import Newsletter from '../pages/Newsletter'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

const Blog = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className='py-16 max-padd-container'
    >
      <Title 
        title1={'Our Expert'} 
        title2={'Blog'} 
        titleStyles={'pb-10'} 
        paraStyles={'!block'} 
      />

      {/* Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.title}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='rounded-3xl border-[10px] border-primary overflow-hidden relative cursor-pointer shadow-soft'
          >
            <motion.img
              src={blog.image}
              alt="blogImg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className='w-full aspect-[4/3] object-cover'
            />

            {/* Overlay */}
            <motion.div
              className='absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-t from-[#1a1512]/85 via-[#1a1512]/25 to-transparent'
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Info */}
            <div className='absolute bottom-4 left-4 right-4 text-white text-[15px]'>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='font-[600] text-[17px] pr-4 leading-[1.25]'
              >
                {blog.title}
              </motion.h3>

              <motion.h4
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='pt-1 pb-3 medium-14'
              >
                {blog.category}
              </motion.h4>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className='btn-light !px-3.5 !py-1 !text-[13px] !bg-white/15 !text-white !ring-white/50 backdrop-blur-sm hover:!bg-white hover:!text-tertiary'
              >
                continue reading
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Newsletter/>
    </motion.section>
  )
}

export default Blog