// import React, { useContext, useEffect, useState } from 'react'
// import Title from './Title'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Item from './Item';
// import { ShopContext } from '../context/ShopContext';


// const NewArrivals = () => {

//   const {products} = useContext(ShopContext)
//   const [newArrivals, setNewArrivals] = useState([])

//   useEffect(() => {
//     const data = products.slice(0, 10)
//     setNewArrivals(data)
//   }, [products])

//   return (
//     <section className='pt-16 pb-6 max-padd-container bg-primary'>
//       <Title title1={'New'} title2={'Arrivals'} titleStyles={'pb-10'} paraStyles={'!block'}/>
//       {/* Swiper Container */}
//       <Swiper
//         autoplay={{
//           delay: 3500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           400: {
//             slidesPerView: 2,
//             spaceBetween: 30
//           },
//           700: {
//             slidesPerView: 3,
//             spaceBetween: 30
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 30
//           },
//           1200: {
//             slidesPerView: 5,
//             spaceBetween: 30
//           },
//         }}
//         modules={[Autoplay, Pagination]}
//         className="h-[555px] sm:h-[411px] md:h-[488px]"
//       >
//         {newArrivals.map((product) => (
//           <SwiperSlide key={product._id}>
//             <Item product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   )
// }

// export default NewArrivals

import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Title from './Title'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper/modules'

import Item from './Item'
import { ShopContext } from '../context/ShopContext'
import HowItWorks from '../pages/HowItWorks'
import PromoBanner from './PromoBanner'

const NewArrivals = () => {

  const { products } = useContext(ShopContext)
  const [newArrivals, setNewArrivals] = useState([])

  useEffect(() => {
    const data = products.slice(0, 10)
    setNewArrivals(data)
  }, [products])

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className='pt-16 pb-6 max-padd-container bg-primary'
    >
      {/* Animated Title Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <Title
          title1={'New'}
          title2={'Arrivals'}
          titleStyles={'pb-10'}
          paraStyles={'!block'}
        />
      </motion.div>

      {/* Swiper Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30
            },
          }}
          modules={[Autoplay, Pagination]}
          className="!pb-14"
        >
          {newArrivals.map((product) => (
            <SwiperSlide key={product._id}>
              <Item product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* <PromoBanner/> */}
             <HowItWorks/>
    </motion.section>
  )
}

export default NewArrivals