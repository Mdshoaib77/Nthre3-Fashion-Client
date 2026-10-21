import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div
      className="
      flex flex-col items-center justify-center
      min-h-[75vh]
      text-center
      px-6
      bg-secondary/10
      "
    >

      {/* 404 number */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-8xl font-display font-medium text-secondary"
      >
        404
      </motion.h1>

      {/* title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-2xl md:text-3xl font-display font-medium text-tertiary dark:text-gray-200"
      >
        Page Not Found
      </motion.h2>

      {/* description */}
      <p className="mt-3 max-w-md text-sm text-gray-30">
        The page you are looking for may have been removed,
        renamed or is temporarily unavailable.
      </p>

      {/* button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/"
          className="inline-block mt-6 btn-secondary"
        >
          Back to Home
        </Link>
      </motion.div>

    </div>
  )
}

export default NotFound