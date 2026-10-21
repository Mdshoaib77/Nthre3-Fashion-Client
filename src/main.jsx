import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { MotionConfig } from 'framer-motion'
import ShopContextProvider from './context/ShopContext.jsx'

const Root = () => {

  // ✅ Dark mode persist (layout safe)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ShopContextProvider>
            <App />
          </ShopContextProvider>
        </BrowserRouter>
      </MotionConfig>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(
  <Root />
)