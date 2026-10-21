import React from 'react'
import { motion } from 'framer-motion'

const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${titleStyles} pb-1`}
    >
      <h3 className={`${title1Styles} h3`}>
        {title1}
        <span className='text-secondary italic !font-normal'>
          {" "}{title2}
        </span>
      </h3>

      <p className={`${paraStyles} hidden max-w-md`}>
        Discover the best deals on top-quality products, Crafted <br />
        to elevate your everyday experience.
      </p>
    </motion.div>
  )
}

export default Title
