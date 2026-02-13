import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useApplicationStatus } from '../context/ApplicationStatusContext'

const NavLink = ({ to, children }) => {
  const active = useLocation().pathname === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition ${active ? 'bg-brand-100 text-brand-700' : 'text-slate-700 hover:bg-slate-50'}`}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { status } = useApplicationStatus()
  const location = useLocation()

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Navbar */}
        <div className="py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-lg">SI</div>
            <div>
              <div className="text-sm font-bold text-slate-900">Startup Internships</div>
              <div className="text-xs text-brand-600 font-semibold">2026 Cohort</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apply">Apply</NavLink>
            {status.step !== 'home' && <NavLink to="/review">Review</NavLink>}
          </nav>

          {/* Status Badge */}
          {status.step !== 'home' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-brand-50 rounded-full border border-brand-200"
            >
              <div className={`w-2.5 h-2.5 rounded-full ${
                status.step === 'success' ? 'bg-green-500' :
                status.step === 'submitted' ? 'bg-blue-500' :
                'bg-brand-500'
              } animate-pulse`} />
              <span className="text-xs font-semibold text-slate-700">
                {status.step === 'applying' && 'Applying...'}
                {status.step === 'review' && 'Review'}
                {status.step === 'submitted' && 'Pending'}
                {status.step === 'success' && '✓ Done'}
              </span>
            </motion.div>
          )}
        </div>

        {/* Progress Bar */}
        {(status.step === 'applying' || status.step === 'review') && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-2 pb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-600">Progress</span>
              <span className="text-xs font-bold text-brand-600">{status.completionPercentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${status.completionPercentage}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-brand-500 to-brand-600"
              />
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
