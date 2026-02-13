import React from 'react'
import { motion } from 'framer-motion'

const Input = React.memo(({ label, id, error, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        id={id}
        {...props}
        className={`w-full rounded-lg border px-3.5 py-2.5 shadow-sm transition focus:ring-2 focus:ring-brand-200 focus:border-brand-400 ${
          error ? 'ring-1 ring-red-300 border-red-400' : 'border-slate-300'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>}
    </motion.div>
  )
})

export default Input
