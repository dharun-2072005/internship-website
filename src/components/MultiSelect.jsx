import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const MultiSelect = ({ options = [], value = [], onChange }) => {
  const selected = useMemo(() => new Set(value), [value])

  const toggle = (opt) => {
    const next = new Set(value)
    if (next.has(opt)) next.delete(opt)
    else next.add(opt)
    onChange(Array.from(next))
  }

  return (
    <motion.div
      className="flex flex-wrap gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {options.map((opt, idx) => (
        <motion.button
          key={opt}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => toggle(opt)}
          className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition ${
            selected.has(opt)
              ? 'bg-brand-500 text-white border-brand-600 shadow-md'
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
          }`}
        >
          {selected.has(opt) && <span className="mr-1">✓</span>}
          {opt}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default React.memo(MultiSelect)
