import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { ShopContext } from "../context/ShopContext"
import Footer from "../components/Footer"
import Title from "../components/Title"
import { toast } from "react-toastify"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const Settings = () => {

  const { backendUrl, token } = useContext(ShopContext)

  const [user,setUser] = useState({
    name:"",
    email:""
  })

  const [password,setPassword] = useState({
    newPassword:""
  })


  /* Fetch Profile */

  const fetchProfile = async () => {

    try{

      const response = await axios.get(
        backendUrl + "/api/user/profile",
        { headers:{token} }
      )

      if(response.data.success){
        setUser(response.data.user)
      }

    }catch(error){
      console.log(error)
    }

  }


  /* Update Profile */

  const updateProfile = async () => {

    try{

      const response = await axios.post(
        backendUrl + "/api/user/update-profile",
        {
          name:user.name,
          email:user.email
        },
        { headers:{token} }
      )

      if(response.data.success){
        toast.success("Profile Updated")
      }

    }catch(error){
      console.log(error)
      toast.error(error.message)
    }

  }


  /* Change Password */

  const changePassword = async () => {

    try{

      const response = await axios.post(
        backendUrl + "/api/user/change-password",
        {
          newPassword:password.newPassword
        },
        { headers:{token} }
      )

      if(response.data.success){
        toast.success("Password Updated")
        setPassword({newPassword:""})
      }

    }catch(error){
      console.log(error)
      toast.error(error.message)
    }

  }


  useEffect(()=>{

    if(token){
      fetchProfile()
    }

  },[token])


  return (

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5}}
    >

      <div className="bg-primary">

        <div className="py-16 max-padd-container">

          {/* Title */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="mb-14"
          >

            <Title
              title1={"Account"}
              title2={"Settings"}
            />

          </motion.div>


          {/* Profile Settings */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="p-8 mb-10 bg-white shadow-soft ring-1 ring-[color:var(--line)] rounded-2xl"
          >

            <h3 className="mb-6 text-xl font-semibold font-display">
              Profile Information
            </h3>

            <div className="flex flex-col gap-4">

              <input
                type="text"
                value={user.name}
                onChange={(e)=>setUser({...user,name:e.target.value})}
                placeholder="Name"
                className="px-4 py-3 bg-white border outline-none rounded-xl border-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/50"
              />

              <input
                type="email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder="Email"
                className="px-4 py-3 bg-white border outline-none rounded-xl border-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/50"
              />

              <button
                onClick={updateProfile}
                className="self-start px-7 py-2.5 font-medium text-white transition-colors duration-300 rounded-full bg-secondary hover:bg-[#96431f]"
              >
                Update Profile
              </button>

            </div>

          </motion.div>


          {/* Password Settings */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="p-8 bg-white shadow-soft ring-1 ring-[color:var(--line)] rounded-2xl"
          >

            <h3 className="mb-6 text-xl font-semibold font-display">
              Change Password
            </h3>

            <div className="flex flex-col gap-4">

              <input
                type="password"
                placeholder="New Password"
                value={password.newPassword}
                onChange={(e)=>setPassword({newPassword:e.target.value})}
                className="px-4 py-3 bg-white border outline-none rounded-xl border-[color:var(--line)] transition-shadow focus:ring-2 focus:ring-secondary/50"
              />

              <button
                onClick={changePassword}
                className="self-start px-7 py-2.5 font-medium text-white transition-colors duration-300 rounded-full bg-secondary hover:bg-[#96431f]"
              >
                Update Password
              </button>

            </div>

          </motion.div>

        </div>

      </div>

      <Footer/>

    </motion.div>

  )

}

export default Settings