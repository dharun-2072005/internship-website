import React from 'react'
import { motion } from 'framer-motion'

const Button = React.memo(({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
      className={
        'inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-semibold shadow-md transition transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-300 bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ' +
        className
      }
    >
      {children}
    </motion.button>
  )
})

export default Button
