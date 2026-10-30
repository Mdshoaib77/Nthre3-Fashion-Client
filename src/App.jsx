// // import React from 'react'
// // import Header from './components/Header'
// // import { Route, Routes } from 'react-router-dom'
// // import Home from './pages/Home'
// // import Collection from './pages/Collection'
// // import Product from './pages/Product'
// // import Testimonials from './pages/Testimonials'
// // import Cart from './pages/Cart'
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import PlaceOrder from './pages/PlaceOrder'
// // import Login from './pages/Login'
// // import Orders from './pages/Orders'
// // import Verify from './pages/Verify'
// // import Contact from './components/Contact'
// // import Profile from './components/Profile'

// // const App = () => {
// //   return (
// //     <main
// //       className='
// //         overflow-hidden
// //         text-[#404040]
// //         bg-white
// //         min-h-screen
// //         transition-colors duration-300

// //         dark:bg-[#0B1C2D]
// //         dark:text-gray-200
// //       '
// //     >
      
// //       <ToastContainer />
      
// //       <Header />

// //       <Routes>
// //         <Route path='/' element={<Home />}/>
// //         <Route path='/collection' element={<Collection />}/>
// //         <Route path='/product/:productId' element={<Product />}/>
// //         <Route path='/testimonials' element={<Testimonials />}/>
// //         <Route path='/contact' element={<Contact />}/>
// //         <Route path='/cart' element={<Cart />}/>
// //         <Route path='/login' element={<Login />}/>
// //         <Route path='/place-order' element={<PlaceOrder />}/>
// //         <Route path='/orders' element={<Orders />}/>
// //         <Route path='/verify' element={<Verify />}/>
// //         <Route path='/profile' element={<Profile />}/>
// //       </Routes>

// //     </main>
// //   )
// // }

// // export default App


// // import React from 'react'
// // import Header from './components/Header'
// // import { Route, Routes } from 'react-router-dom'
// // import Home from './pages/Home'
// // import Collection from './pages/Collection'
// // import Product from './pages/Product'
// // import Testimonials from './pages/Testimonials'
// // import Cart from './pages/Cart'
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import PlaceOrder from './pages/PlaceOrder'
// // import Login from './pages/Login'
// // import Orders from './pages/Orders'
// // import Verify from './pages/Verify'
// // import Contact from './components/Contact'
// // import Profile from './components/Profile'

// // /* NEW ROUTES (from components folder) */
// // import Dashboard from './components/Dashboard'
// // import Wishlist from './components/Wishlist'
// // import Settings from './components/Settings'

// // const App = () => {
// //   return (
// //     <main
// //       className='
// //         overflow-hidden
// //         text-[#404040]
// //         bg-white
// //         min-h-screen
// //         transition-colors duration-300
// //         dark:bg-[#0B1C2D]
// //         dark:text-gray-200
// //       '
// //     >
      
// //       <ToastContainer />
      
// //       <Header />

// //       <Routes>
// //         <Route path='/' element={<Home />}/>
// //         <Route path='/collection' element={<Collection />}/>
// //         <Route path='/product/:productId' element={<Product />}/>
// //         <Route path='/testimonials' element={<Testimonials />}/>
// //         <Route path='/contact' element={<Contact />}/>
// //         <Route path='/cart' element={<Cart />}/>
// //         <Route path='/login' element={<Login />}/>
// //         <Route path='/place-order' element={<PlaceOrder />}/>
// //         <Route path='/orders' element={<Orders />}/>
// //         <Route path='/verify' element={<Verify />}/>
// //         <Route path='/profile' element={<Profile />}/>

// //         {/* NEW USER ROUTES */}
// //         <Route path='/dashboard' element={<Dashboard />}/>
// //         <Route path='/wishlist' element={<Wishlist />}/>
// //         <Route path='/settings' element={<Settings />}/>
// //       </Routes>

// //     </main>
// //   )
// // }

// // export default App



// // import React, { Suspense, lazy } from 'react'
// // import Header from './components/Header'
// // import { Route, Routes } from 'react-router-dom'
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // /* GLOBAL LOADER */
// // import GlobalLoader from './components/GlobalLoader'
// // import NotFound from './pages/NotFound';

// // /* LAZY PAGES */
// // const Home = lazy(() => import('./pages/Home'))
// // const Collection = lazy(() => import('./pages/Collection'))
// // const Product = lazy(() => import('./pages/Product'))
// // const Testimonials = lazy(() => import('./pages/Testimonials'))
// // const Cart = lazy(() => import('./pages/Cart'))
// // const PlaceOrder = lazy(() => import('./pages/PlaceOrder'))
// // const Login = lazy(() => import('./pages/Login'))
// // const Orders = lazy(() => import('./pages/Orders'))
// // const Verify = lazy(() => import('./pages/Verify'))

// // /* COMPONENT ROUTES */
// // const Contact = lazy(() => import('./components/Contact'))
// // const Profile = lazy(() => import('./components/Profile'))

// // /* NEW ROUTES (from components folder) */
// // const Dashboard = lazy(() => import('./components/Dashboard'))
// // const Wishlist = lazy(() => import('./components/Wishlist'))
// // const Settings = lazy(() => import('./components/Settings'))

// // const App = () => {
// //   return (
// //     <main
// //       className='
// //         overflow-hidden
// //         text-[#404040]
// //         bg-white
// //         min-h-screen
// //         transition-colors duration-300
// //         dark:bg-[#0B1C2D]
// //         dark:text-gray-200
// //       '
// //     >
      
// //       <ToastContainer />
      
// //       <Header />

// //       <Suspense fallback={<GlobalLoader />}>
// //         <Routes>
// //           <Route path='/' element={<Home />}/>
// //           <Route path='/collection' element={<Collection />}/>
// //           <Route path='/product/:productId' element={<Product />}/>
// //           <Route path='/testimonials' element={<Testimonials />}/>
// //           <Route path='/contact' element={<Contact />}/>
// //           <Route path='/cart' element={<Cart />}/>
// //           <Route path='/login' element={<Login />}/>
// //           <Route path='/place-order' element={<PlaceOrder />}/>
// //           <Route path='/orders' element={<Orders />}/>
// //           <Route path='/verify' element={<Verify />}/>
// //           <Route path='/profile' element={<Profile />}/>

// //           {/* NEW USER ROUTES */}
// //           <Route path='/dashboard' element={<Dashboard />}/>
// //           <Route path='/wishlist' element={<Wishlist />}/>
// //           <Route path='/settings' element={<Settings />}/>

// //             <Route path="*" element={<NotFound />} />
// //         </Routes>
// //       </Suspense>

// //     </main>
// //   )
// // }

// // export default App




// import React, { Suspense, lazy } from 'react'
// import Header from './components/Header'
// import { Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// /* GLOBAL LOADER */
// import GlobalLoader from './components/GlobalLoader'
// import NotFound from './pages/NotFound';

// /* LAZY PAGES */
// const Home = lazy(() => import('./pages/Home'))
// const Collection = lazy(() => import('./pages/Collection'))
// const CategoryBrowse = lazy(() => import('./pages/CategoryBrowse'))
// const Product = lazy(() => import('./pages/Product'))
// const Testimonials = lazy(() => import('./pages/Testimonials'))
// const Cart = lazy(() => import('./pages/Cart'))
// const PlaceOrder = lazy(() => import('./pages/PlaceOrder'))
// const Login = lazy(() => import('./pages/Login'))
// const Orders = lazy(() => import('./pages/Orders'))
// const Verify = lazy(() => import('./pages/Verify'))

// /* COMPONENT ROUTES */
// const Contact = lazy(() => import('./components/Contact'))
// const Profile = lazy(() => import('./components/Profile'))

// /* NEW ROUTES (from components folder) */
// const Dashboard = lazy(() => import('./components/Dashboard'))
// const Wishlist = lazy(() => import('./components/Wishlist'))
// const Settings = lazy(() => import('./components/Settings'))

// const App = () => {
//   return (
//     <main className='overflow-x-clip min-h-screen text-[var(--text)] bg-[var(--bg)] transition-colors duration-300'>
      
//       <ToastContainer />
      
//       <Header />

//       <Suspense fallback={<GlobalLoader />}>
//         <Routes>
//           <Route path='/' element={<Home />}/>
//           <Route path='/collection' element={<Collection />}/>
//           <Route path='/categories/:slug' element={<CategoryBrowse />}/>
//           <Route path='/product/:productId' element={<Product />}/>
//           <Route path='/testimonials' element={<Testimonials />}/>
//           <Route path='/contact' element={<Contact />}/>
//           <Route path='/cart' element={<Cart />}/>
//           <Route path='/login' element={<Login />}/>
//           <Route path='/place-order' element={<PlaceOrder />}/>
//           <Route path='/orders' element={<Orders />}/>
//           <Route path='/verify' element={<Verify />}/>
//           <Route path='/profile' element={<Profile />}/>

//           {/* NEW USER ROUTES */}
//           <Route path='/dashboard' element={<Dashboard />}/>
//           <Route path='/wishlist' element={<Wishlist />}/>
//           <Route path='/settings' element={<Settings />}/>

//             <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>

//     </main>
//   )
// }

// export default App


import React, { Suspense, lazy, useLayoutEffect } from 'react'
import Header from './components/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* GLOBAL LOADER */
import GlobalLoader from './components/GlobalLoader'
import NotFound from './pages/NotFound';

/* LAZY PAGES */
const Home = lazy(() => import('./pages/Home'))
const Collection = lazy(() => import('./pages/Collection'))
const CategoryBrowse = lazy(() => import('./pages/CategoryBrowse'))
const Product = lazy(() => import('./pages/Product'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Cart = lazy(() => import('./pages/Cart'))
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'))
const Login = lazy(() => import('./pages/Login'))
const Orders = lazy(() => import('./pages/Orders'))
const Verify = lazy(() => import('./pages/Verify'))

/* COMPONENT ROUTES */
const Contact = lazy(() => import('./components/Contact'))
const Profile = lazy(() => import('./components/Profile'))

/* USER ROUTES */
const Dashboard = lazy(() => import('./components/Dashboard'))
const Wishlist = lazy(() => import('./components/Wishlist'))
const Settings = lazy(() => import('./components/Settings'))

/* SCROLL TO TOP ON EVERY PAGE CHANGE
   Without this, the new page opens at the old page's scroll position
   (e.g. near the footer on mobile). Now every route change starts at the top. */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // stop the browser from restoring the old scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

const App = () => {
  return (
    <main className='overflow-x-clip min-h-screen text-[var(--text)] bg-[var(--bg)] transition-colors duration-300'>

      <ScrollToTop />
      <ToastContainer />
      <Header />

      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/collection' element={<Collection />}/>
          <Route path='/categories/:slug' element={<CategoryBrowse />}/>
          <Route path='/product/:productId' element={<Product />}/>
          <Route path='/testimonials' element={<Testimonials />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/place-order' element={<PlaceOrder />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path='/profile' element={<Profile />}/>

          {/* USER ROUTES */}
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/wishlist' element={<Wishlist />}/>
          <Route path='/settings' element={<Settings />}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

    </main>
  )
}

export default App