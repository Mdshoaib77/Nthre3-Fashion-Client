import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { FaEnvelope, FaLocationDot, FaPhone, FaClock } from 'react-icons/fa6'
import Footer from '../components/Footer'
import axios from "axios"
import { ShopContext } from "../context/ShopContext"
import { toast } from "react-toastify"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const Contact = () => {

  const { backendUrl } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await axios.post(
        backendUrl + "/api/contact/add",
        formData
      )

      if (response.data.success) {

        toast.success("Message Sent Successfully")

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })

      } else {

        toast.error(response.data.message)

      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }

  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mb-16 bg-primary'>
        <div className='py-10 max-padd-container'>

          <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 mb-16 rounded-2xl'>

            {/* Left Side */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='flex flex-col items-start justify-between gap-10'
            >

              <Title
                title1={'Get In'}
                title2={'Touch'}
                title1Styles={'pb-10'}
                paraStyles={'!block'}
              />

              <div className='flex flex-col w-full gap-6'>

                <motion.div whileHover={{ scale: 1.02 }} className='flex items-center gap-4 p-4 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
                  <div className='p-3.5 rounded-full bg-secondary/10 text-secondary'>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5 className='bold-14'>Email Us</h5>
                    <p className='text-sm text-gray-30'>nthre3official@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className='flex items-center gap-4 p-4 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
                  <div className='p-3.5 rounded-full bg-secondary/10 text-secondary'>
                    <FaPhone />
                  </div>
                  <div>
                    <h5 className='bold-14'>Call Us</h5>
                    <p className='text-sm text-gray-30'>01410-286423</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className='flex items-center gap-4 p-4 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
                  <div className='p-3.5 rounded-full bg-secondary/10 text-secondary'>
                    <FaLocationDot />
                  </div>
                  <div>
                    <h5 className='bold-14'>Office Location</h5>
                    <p className='text-sm text-gray-30'>Dhaka, Bangladesh</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className='flex items-center gap-4 p-4 bg-white rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft'>
                  <div className='p-3.5 rounded-full bg-secondary/10 text-secondary'>
                    <FaClock />
                  </div>
                  <div>
                    <h5 className='bold-14'>Support Hours</h5>
                    <p className='text-sm text-gray-30'>Sat - Thu: 10am - 7pm</p>
                  </div>
                </motion.div>

              </div>

            </motion.div>


            {/* Contact Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='p-6 sm:p-8 bg-white rounded-3xl ring-1 ring-[color:var(--line)] shadow-soft'
            >

              <h4 className='mb-6 h4'>Send us a Message</h4>

              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 text-sm border-none rounded-xl outline-none bg-primary ring-1 ring-[color:var(--line)] focus:ring-2 focus:ring-secondary/50'
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 text-sm border-none rounded-xl outline-none bg-primary ring-1 ring-[color:var(--line)] focus:ring-2 focus:ring-secondary/50'
                    required
                  />

                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full px-4 py-3 text-sm border-none rounded-xl outline-none bg-primary ring-1 ring-[color:var(--line)] focus:ring-2 focus:ring-secondary/50'
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 text-sm border-none rounded-xl outline-none resize-none bg-primary ring-1 ring-[color:var(--line)] focus:ring-2 focus:ring-secondary/50'
                  required
                ></textarea>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className='w-full py-3 font-semibold btn-secondary'
                >
                  Send Message
                </motion.button>

              </form>

            </motion.div>

          </div>

        </div>
      </div>

      <Footer />

    </motion.div>
  )
}

export default Contact