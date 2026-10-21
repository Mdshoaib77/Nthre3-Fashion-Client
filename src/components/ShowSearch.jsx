import React, { useContext, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const ShowSearch = () => {
    const { search, setSearch, showSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

    return (
        <AnimatePresence>
            {showSearch && visible && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className='py-4 pb-7'
                >
                    <div className='text-center'>
                        <motion.div
                            initial={{ scale: 0.98 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className='inline-flex items-center justify-center w-full px-4 py-2 overflow-hidden bg-white rounded-full ring-1 ring-[color:var(--line)] shadow-soft transition-shadow duration-300 focus-within:ring-2 focus-within:ring-secondary/50'
                        >
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder='Search here...'
                                className='w-full text-sm bg-transparent border-none outline-none'
                            />

                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className='text-center text-secondary'
                            >
                                <FaSearch className='cursor-pointer'/>
                            </motion.div>

                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ShowSearch