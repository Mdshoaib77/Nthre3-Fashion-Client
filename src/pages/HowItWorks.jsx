import React from "react"
import { motion } from "framer-motion"

import { FaCartShopping } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa"
import { FaCreditCard } from "react-icons/fa"
import { FaTruck } from "react-icons/fa"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const steps = [
  {
    icon: <FaSearch />,
    title: "Browse Products",
    desc: "Explore the latest fashion collections for Men, Women, and Kids."
  },
  {
    icon: <FaCartShopping />,
    title: "Add To Cart",
    desc: "Choose your favorite items and add them to your shopping cart."
  },
  {
    icon: <FaCreditCard />,
    title: "Secure Checkout",
    desc: "Complete your purchase using our secure and fast checkout system."
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Get your order delivered quickly and enjoy your new style."
  }
]

const HowItWorks = () => {
  return (
    <div className="py-16 mt-6 bg-primary">

      <div className="max-padd-container">

        {/* Section Title */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <h2 className="h2 !mb-0 text-tertiary dark:text-white">
            How It Works
          </h2>

          <p className="mt-2 text-gray-30">
            Shopping with NTHRE3 is simple and fast
          </p>

        </motion.div>


        {/* Steps */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-7 text-center bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft transition-shadow duration-500 hover:shadow-lift"
            >

              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 text-2xl rounded-full text-secondary bg-primary">
                {step.icon}
              </div>

              <h3 className="mb-2 text-[17px] font-semibold text-tertiary dark:text-white">
                {step.title}
              </h3>

              <p className="text-sm text-gray-30">
                {step.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default HowItWorks