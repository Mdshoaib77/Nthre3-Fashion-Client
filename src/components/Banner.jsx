import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <section className='mx-auto max-w-[1440px] overflow-hidden'>
      <div className='bg-white flexBetween'>

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='flex-1 hidden px-6 lg:block xl:px-12'
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className='uppercase h2 !font-sans !font-semibold !tracking-[0.03em]'
          >
            Affordable Style, Timeless Appeal
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className='uppercase h4 tracking-[0.2em] !text-[13px] md:!text-[14px] text-secondary'
          >
            Transform Your Closet Today
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className='flex mt-5'
          >
            <Link
              to={'/collection'}
              className='btn-secondary !py-0 !pr-0 rounded-full flexCenter gap-x-2 group'
            >
              Explore Collection

              <motion.div
                whileHover={{ rotate: -20, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <FaArrowRight className='!bg-white text-tertiary rounded-full h-9 w-9 p-3 m-[3px] transition-transform duration-300 group-hover:translate-x-0.5' />
              </motion.div>

            </Link>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className='flex-1'
        >
          <motion.img
            src={banner}
            alt=""
            className='rounded-tl-3xl rounded-bl-3xl'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Banner