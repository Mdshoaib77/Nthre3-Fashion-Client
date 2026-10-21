import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { FaCheck, FaStar } from 'react-icons/fa6'
import user1 from "../assets/testimonials/user1.png"
import user2 from "../assets/testimonials/user2.png"
import product1 from "../assets/product_1.png"
import product2 from "../assets/product_2_1.png"
import product3 from "../assets/product_3.png"
import product4 from "../assets/product_6.png"
import Footer from '../components/Footer'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mb-16 bg-primary'>
        <div className='py-10 max-padd-container'>

          <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 lg:gap-20 mb-16 rounded-2xl'>

            {/* Left side */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='flex flex-col items-start justify-between gap-10'
            >
              <Title
                title1={'What People'}
                title2={'Says'}
                title1Styles={'pb-10'}
                paraStyles={'!block'}
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className='flex flex-col gap-1 p-3.5 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'
              >
                <div className='flex gap-2 text-secondary'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='medium-14'>
                  more than <b>+25,000 reviews</b>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Reviews */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>

              {/* Review Card 1 */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className='flex-col gap-1 p-5 sm:p-6 bg-white rounded-2xl glex ring-1 ring-[color:var(--line)] shadow-soft'
              >
                <div className='flexBetween'>
                  <div className='flexCenter gap-x-2'>
                    <img src={user1} alt="userImg" height={44} width={44} className='rounded-full' />
                    <h5 className='bold-14'>John Doe</h5>
                  </div>
                  <div className='p-1 px-2 text-xs font-semibold text-white rounded-full bg-secondary flexCenter gap-x-2'>
                    <FaCheck />
                    Verified
                  </div>
                </div>

                <hr className='h-[1px] w-full my-2' />

                <div className='flex mt-5 mb-1 text-xs gap-x-1 text-secondary'>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <h4 className='h4'>Exceptional Quality</h4>
                <p>
                  I recently purchased a dress from NTHRE3 and I’m truly impressed.
                  The fabric feels premium, the stitching is flawless, and it fits perfectly.
                  It looks even better in real life than in the pictures!
                </p>

                <div className='flex mt-5 gap-x-1'>
                  <img src={product1} alt="prdctImg" height={44} width={44} className='object-cover rounded-lg aspect-square' />
                  <img src={product2} alt="prdctImg" height={44} width={44} className='object-cover rounded-lg aspect-square' />
                </div>
              </motion.div>

              {/* Review Card 2 */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className='flex-col gap-1 p-5 sm:p-6 bg-white rounded-2xl glex ring-1 ring-[color:var(--line)] shadow-soft'
              >
                <div className='flexBetween'>
                  <div className='flexCenter gap-x-2'>
                    <img src={user2} alt="userImg" height={44} width={44} className='rounded-full' />
                    <h5 className='bold-14'>Izabella Stress</h5>
                  </div>
                  <div className='p-1 px-2 text-xs font-semibold text-white rounded-full bg-secondary flexCenter gap-x-2'>
                    <FaCheck />
                    Verified
                  </div>
                </div>

                <hr className='h-[1px] w-full my-2' />

                <div className='flex mt-5 mb-1 text-xs gap-x-1 text-secondary'>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <h4 className='h4'>Modern & Elegant Design</h4>
                <p>
                  NTHRE3 perfectly blends modern trends with timeless elegance.
                  The design is stylish yet comfortable enough for everyday wear.
                  Fast delivery and great packaging made the experience even better.
                </p>

                <div className='flex mt-5 gap-x-1'>
                  <img src={product3} alt="prdctImg" height={44} width={44} className='object-cover rounded-lg aspect-square' />
                  <img src={product4} alt="prdctImg" height={44} width={44} className='object-cover rounded-lg aspect-square' />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}

export default Testimonials