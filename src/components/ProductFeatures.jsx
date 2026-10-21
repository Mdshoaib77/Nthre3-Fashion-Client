import React from 'react'
import { motion } from 'framer-motion'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'

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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const ProductFeatures = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className='mt-6 bg-primary rounded-3xl p-3 sm:p-5'
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 rounded-xl'
      >

        {/* Easy Return */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 200 }}
          className='p-3 flex items-center gap-x-4 rounded-3xl'
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className='flex items-center justify-center w-14 h-14 text-[26px] bg-white rounded-full shrink-0 ring-1 ring-[color:var(--line)] shadow-soft'
          >
            <TbArrowBackUp className='text-secondary'/>
          </motion.div>
          <div>
            <h4 className='capitalize h4'>Easy Return</h4>
            <p>
              Shop confidently with NTHRE3’s hassle-free return policy. 
              If your outfit doesn’t fit perfectly, enjoy smooth and simple returns.
            </p>
          </div>
        </motion.div>

        {/* Fast Delivery */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 200 }}
          className='p-3 flex items-center gap-x-4 rounded-3xl'
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className='flex items-center justify-center w-14 h-14 text-[26px] bg-white rounded-full shrink-0 ring-1 ring-[color:var(--line)] shadow-soft'
          >
            <TbTruckDelivery className='text-secondary'/>
          </motion.div>
          <div>
            <h4 className='capitalize h4'>Fast Delivery</h4>
            <p>
              Experience quick and reliable delivery services that bring 
              your favorite NTHRE3 styles right to your doorstep.
            </p>
          </div>
        </motion.div>

        {/* Secure Payment */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 200 }}
          className='p-3 flex items-center gap-x-4 rounded-3xl'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
            className='flex items-center justify-center w-14 h-14 text-[26px] bg-white rounded-full shrink-0 ring-1 ring-[color:var(--line)] shadow-soft'
          >
            <RiSecurePaymentLine className='text-secondary'/>
          </motion.div>
          <div>
            <h4 className='capitalize h4'>Secure Payment</h4>
            <p>
              Your transactions are fully protected with advanced encryption, 
              ensuring a safe and secure shopping experience every time.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  )
}

export default ProductFeatures