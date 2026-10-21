import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"
import Footer from "../components/Footer"
import { FaHeart, FaTrash } from "react-icons/fa6"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const Wishlist = () => {

  const { backendUrl, token, addToCart, currency, getEffectivePrice } = useContext(ShopContext)

  const [wishlist,setWishlist] = useState([])

  const fetchWishlist = async () => {

    try{

      const response = await axios.get(
        backendUrl + "/api/wishlist",
        {headers:{token}}
      )

      if(response.data.success){
        setWishlist(response.data.wishlist)
      }

    }catch(error){
      console.log(error)
    }

  }

  const removeItem = async (id) => {

    try{

      const response = await axios.post(
        backendUrl + "/api/wishlist/remove",
        {productId:id},
        {headers:{token}}
      )

      if(response.data.success){
        fetchWishlist()
      }

    }catch(error){
      console.log(error)
    }

  }

  useEffect(()=>{
    if(token){
      fetchWishlist()
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
            viewport={{once:true}}
            className="mb-14"
          >
            <Title
              title1={"My"}
              title2={"Wishlist"}
              title1Styles={"pb-4"}
              paraStyles={"!block"}
            />
          </motion.div>


          {/* Wishlist Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {wishlist.length === 0 ? (

              <div className="p-10 text-center bg-white rounded-3xl col-span-full ring-1 ring-[color:var(--line)] shadow-soft">
                <FaHeart className="mx-auto text-4xl text-secondary"/>
                <p className="mt-4 text-gray-30">
                  Your Wishlist is Empty
                </p>
              </div>

            ) : (

              wishlist.map((item,index)=>(
                
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:true}}
                  whileHover={{y:-4}}
                  className="p-4 bg-white shadow-soft ring-1 ring-[color:var(--line)] rounded-2xl"
                >

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover w-full mb-4 aspect-[5/6] rounded-xl"
                  />

                  {/* Product Name */}
                  <h3 className="mb-1 font-semibold text-tertiary dark:text-white">
                    {item.name}
                  </h3>

                  <p className="mb-4 text-sm text-gray-30">
                    {currency}{getEffectivePrice(item)}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2">

                    <button
                      onClick={()=>addToCart(item._id,item.sizes?.[0])}
                      className="flex-1 py-2.5 text-sm font-medium text-white transition-colors duration-300 rounded-xl bg-secondary hover:bg-[#96431f]"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={()=>removeItem(item._id)}
                      className="flex items-center justify-center px-3.5 text-white transition-colors duration-300 bg-red-600 rounded-xl hover:bg-red-700"
                    >
                      <FaTrash/>
                    </button>

                  </div>

                </motion.div>

              ))

            )}

          </div>

        </div>
      </div>

      <Footer/>

    </motion.div>

  )

}

export default Wishlist