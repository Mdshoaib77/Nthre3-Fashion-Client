import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"
import Footer from "../components/Footer"
import { FaUser, FaEnvelope } from "react-icons/fa6"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const Profile = () => {

  const { backendUrl, token } = useContext(ShopContext)

  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  const fetchProfile = async () => {

    try {

      const response = await axios.get(
        backendUrl + "/api/user/profile",
        { headers: { token } }
      )

      if (response.data.success) {
        setUser(response.data.user)
      }

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    if (token) {
      fetchProfile()
    }
  }, [token])

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      <div className="bg-primary">
        <div className="py-16 max-padd-container">

          {/* Title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <Title
              title1={"My"}
              title2={"Profile"}
              title1Styles={"pb-4"}
              paraStyles={"!block"}
            />
          </motion.div>

          {/* Profile Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="max-w-xl p-10 mx-auto bg-white shadow-lift ring-1 ring-[color:var(--line)] rounded-3xl"
          >

            <div className="flex flex-col gap-6">

              {/* Name */}
              <div className="flex items-center gap-4">
                <div className="p-3 text-white rounded-full bg-secondary">
                  <FaUser />
                </div>

                <div>
                  <p className="text-sm text-gray-30">Full Name</p>
                  <h4 className="text-lg font-semibold text-tertiary">
                    {user.name}
                  </h4>
                </div>
              </div>

              <hr />

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 text-white rounded-full bg-secondary">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-30">Email Address</p>
                  <h4 className="text-lg font-semibold text-tertiary">
                    {user.email}
                  </h4>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>

      <Footer />

    </motion.div>
  )
}

export default Profile