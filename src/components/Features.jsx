import React from 'react'
import { motion } from 'framer-motion'
import img1 from "../assets/features/feature1.png"
import img2 from "../assets/features/feature2.png"

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className='pb-20 max-padd-container pt-14'
    >
       {/* container */}
       <div className='grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-xl'>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className='flexCenter gap-x-10'
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img src={img1} alt="featureImg" height={77} width={222} className='rounded-full shadow-soft ring-1 ring-[color:var(--line)]'/>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img src={img2} alt="featureImg" height={77} width={222} className='rounded-full shadow-soft ring-1 ring-[color:var(--line)]'/>
          </motion.div>
        </motion.div>

        {/* Text Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className='flex-wrap flexCenter sm:flex-nowrap gap-x-5'
        >

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='p-4 rounded-3xl'
          >
            <h4 className='capitalize h4'>Quality Product</h4>
            <p>
              At NTHRE3, we craft premium dresses using high-quality fabrics 
              that ensure comfort, durability, and timeless style for every occasion.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='p-4 rounded-3xl'
          >
            <h4 className='capitalize h4'>Fast Delivery</h4>
            <p>
              Enjoy quick and reliable nationwide shipping so your favorite 
              NTHRE3 outfits reach your doorstep right on time.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='p-4 rounded-3xl'
          >
            <h4 className='capitalize h4'>Secure Payment</h4>
            <p>
              Shop with confidence using our fully secure and encrypted 
              payment system designed to protect every transaction.
            </p>
          </motion.div>

        </motion.div>

       </div>
    </motion.section>
  )
}

export default Features