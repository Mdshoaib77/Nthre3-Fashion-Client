import React from 'react'
import { motion } from 'framer-motion'
import { FaMailBulk } from 'react-icons/fa'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const Footer = () => {
    return (
        <footer className='mt-4'>

            {/* Top Contact Section */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-col items-start justify-between gap-8 py-6 max-padd-container lg:flex-row mb-7 bg-primary'
            >
                <motion.div variants={fadeUp}>
                    <h4 className='h4'>We are always here to help</h4>
                    <p>
                        Need assistance with your order or have questions about our collections? 
                        The NTHRE3 support team is ready to assist you anytime.
                    </p>
                </motion.div>

                <div className='flex-wrap gap-8 flexStart'>

                    <motion.div variants={fadeUp} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} className='flexCenter gap-x-6'>
                        <FaLocationDot className='shrink-0 text-secondary text-[18px]' />
                        <div>
                            <h5 className='h5'>Location</h5>
                            <p>House 123, Fashion Avenue, Dhaka</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} className='flexCenter gap-x-6'>
                        <FaPhone className='shrink-0 text-secondary text-[17px]' />
                        <div>
                            <h5 className='h5'>Phone</h5>
                            <p>01410-286423</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} className='flexCenter gap-x-6'>
                        <FaMailBulk className='shrink-0 text-secondary text-[18px]' />
                        <div>
                            <h5 className='h5'>Email Support</h5>
                            <p>nthre3official@gmail.com</p>
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            {/* Main Footer */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='flex flex-wrap items-start justify-between gap-12 mt-12 max-padd-container'
            >
                {/* Logo */}
                <motion.div variants={fadeUp} className='flex flex-col max-w-sm gap-y-5'>
                    <div className='font-display text-[32px] font-bold tracking-[0.07em] leading-none text-tertiary dark:text-white'>
                        NTHRE<span className='italic text-secondary'>3</span>
                    </div>
                    <span className='-mt-3 text-xs tracking-[0.3em] uppercase text-gray-30'>Fashion Forward</span>
                    <p>
                        NTHRE3 is your destination for modern, stylish, and affordable fashion. 
                        Discover premium dresses designed to elevate your everyday look.
                    </p>
                </motion.div>

                <div className='flex-wrap flexStart gap-7 xl:gap-x-36'>

                    <motion.ul variants={fadeUp}>
                        <h4 className='mb-3 h4'>Customer Service</h4>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Help center</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Payment methods</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Contact</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Shipping status</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Complaints</a></li>
                    </motion.ul>

                    <motion.ul variants={fadeUp}>
                        <h4 className='mb-3 h4'>Legal</h4>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Privacy Policy</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Cookie settings</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Terms & conditions</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Cancelation</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Imprint</a></li>
                    </motion.ul>

                    <motion.ul variants={fadeUp}>
                        <h4 className='mb-3 h4'>Others</h4>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Our teams</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Sustainability</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Press</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Jobs</a></li>
                        <li className='my-2'><a href="" className='transition-colors duration-300 text-gray-30 regular-14 hover:text-secondary'>Newsletter</a></li>
                    </motion.ul>

                </div>
            </motion.div>

            {/* Copyright */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='px-8 py-2 mt-6 rounded max-padd-container bg-primary medium-14 flexBetween'
            >
                <span>2026 NTHRE3</span>
                <span>All rights reserved</span>
            </motion.p>

        </footer>
    )
}

export default Footer