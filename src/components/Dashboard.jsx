import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { ShopContext } from "../context/ShopContext"
import Footer from "../components/Footer"
import Title from "../components/Title"

import { FaBoxOpen, FaCartShopping, FaUser } from "react-icons/fa6"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const Dashboard = () => {

  const { backendUrl, token, cartItems } = useContext(ShopContext)

  const [user,setUser] = useState({})
  const [orders,setOrders] = useState([])

  /* Fetch User Profile */

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

  /* Fetch Orders (FIXED ROUTE) */

  const fetchOrders = async () => {

    try{

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers:{token} }
      )

      if(response.data.success){
        setOrders(response.data.orders)
      }

    }catch(error){
      console.log(error)
    }

  }

  useEffect(()=>{

    if(token){
      fetchProfile()
      fetchOrders()
    }

  },[token])


  /* Cart Count */

  const cartCount = Object.values(cartItems).reduce(
    (sum,item)=> sum + Object.values(item).reduce((a,b)=>a+b,0)
  ,0)


  /* Chart Data */

  const chartData = [

    {
      name:"Orders",
      value:orders.length
    },

    {
      name:"Cart",
      value:cartCount
    }

  ]


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
              title1={"User"}
              title2={"Dashboard"}
            />

          </motion.div>


          {/* Profile Card */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="p-6 mb-10 bg-white shadow-soft ring-1 ring-[color:var(--line)] rounded-2xl"
          >

            <div className="flex items-center gap-4">

              <div className="flex items-center justify-center w-16 h-16 text-xl text-white rounded-full bg-secondary">
                {user?.name?.charAt(0)}
              </div>

              <div>

                <h3 className="text-lg font-semibold text-tertiary">
                  {user?.name}
                </h3>

                <p className="text-gray-30">
                  {user?.email}
                </p>

              </div>

            </div>

          </motion.div>


          {/* Stats Cards */}

          <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 md:grid-cols-3">

            {/* Orders */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{y:-4}}
              className="p-6 bg-white shadow-soft ring-1 ring-[color:var(--line)] rounded-2xl"
            >

              <FaBoxOpen className="mb-2 text-2xl text-secondary"/>

              <h3 className="text-2xl font-bold">
                {orders.length}
              </h3>

              <p className="text-gray-30">
                Total Orders
              </p>

            </motion.div>


            {/* Cart */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{y:-4}}
              className="p-6 bg-white shadow-soft ring-1 ring-[color:var(--line)] rounded-2xl"
            >

              <FaCartShopping className="mb-2 text-2xl text-secondary"/>

              <h3 className="text-2xl font-bold">
                {cartCount}
              </h3>

              <p className="text-gray-30">
                Cart Items
              </p>

            </motion.div>


            {/* Account */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{y:-4}}
              className="p-6 bg-white shadow-soft ring-1 ring-[color:var(--line)] rounded-2xl"
            >

              <FaUser className="mb-2 text-2xl text-secondary"/>

              <h3 className="text-2xl font-bold">
                Active
              </h3>

              <p className="text-gray-30">
                Account Status
              </p>

            </motion.div>

          </div>


          {/* Chart */}

          <div className="p-8 bg-white shadow-soft ring-1 ring-[color:var(--line)] rounded-2xl">

            <h3 className="mb-6 text-xl font-semibold font-display">
              Activity Overview
            </h3>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={chartData}>

                <CartesianGrid strokeDasharray="3 3" stroke="#E9E0D6" vertical={false} />

                <XAxis dataKey="name"/>

                <YAxis/>

                <Tooltip/>

                <Bar
                  dataKey="value"
                  fill="#B0532A"
                  radius={[5,5,0,0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <Footer/>

    </motion.div>

  )

}

export default Dashboard