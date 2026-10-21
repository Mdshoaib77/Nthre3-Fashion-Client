import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CategoryShowcase from '../components/CategoryShowcase'
import NewArrivals from '../components/NewArrivals'
import Banner from '../components/Banner'
import PopularProducts from '../components/PopularProducts'
// import Blog from '../components/Blog'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero />
    <CategoryShowcase />
    <Features />
    <NewArrivals />
    <Banner />
    <PopularProducts />
    {/* <Blog /> */}
    <Footer />
    </>
  )
}

export default Home