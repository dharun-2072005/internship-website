import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from '../context/FormContext'
import { useApplicationStatus } from '../context/ApplicationStatusContext'

const confetti = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 0.5,
  duration: 2 + Math.random(),
}))

export default function Success() {
  const { data } = useForm()
  const { status } = useApplicationStatus()

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated Confetti */}
      {confetti.map((c) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 1, y: -20, x: 0 }}
          animate={{ opacity: 0, y: 800, x: Math.random() * 100 - 50 }}
          transition={{ delay: c.delay, duration: c.duration }}
          className="fixed pointer-events-none"
          style={{ left: `${c.left}%`, top: -20 }}
        >
          <div className="text-2xl">{['🎉', '🚀', '💡', '⭐', '🎊'][Math.floor(Math.random() * 5)]}</div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 100 }}
          className="mb-6"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-brand-500 rounded-full flex items-center justify-center shadow-lg">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.8 }}
              className="text-5xl"
            >
              ✓
            </motion.div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3"
        >
          Application Submitted!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg text-slate-600 mb-8"
        >
          Thanks for applying, <span className="font-semibold text-brand-600">{data.fullName}</span>! We're excited to review your application.
        </motion.p>

        {/* Application Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-br from-brand-50 to-slate-50 rounded-2xl border-2 border-brand-100 p-6 mb-8 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-500 font-semibold">Applying For</div>
              <div className="text-lg font-bold text-slate-900 mt-1">{data.role}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 font-semibold">Experience Level</div>
              <div className="text-lg font-bold text-slate-900 mt-1">{data.experience}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 font-semibold">Email on File</div>
              <div className="text-lg font-bold text-slate-900 mt-1">{data.email}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 font-semibold">Application ID</div>
              <div className="text-lg font-bold text-brand-600 mt-1 font-mono">{status.applicationId}</div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 text-left"
        >
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-xl">📋</span> What happens next?
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-brand-600 font-bold mt-1">1</span>
              <span>We review all applications and will reach out within 3–5 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-600 font-bold mt-1">2</span>
              <span>Selected candidates will be invited for a short technical screening call</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-600 font-bold mt-1">3</span>
              <span>Final-round interviews with the team and confirmation of your internship start date</span>
            </li>
          </ul>
        </motion.div>

        {/* Tips for Selected Candidates */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 text-left"
        >
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-xl">💡</span> Pro tip for selected candidates
          </h3>
          <p className="text-slate-700">
            If you're selected, we'll send instructions for onboarding and setting up your dev environment. Make sure to check your email (including spam folder) for updates!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all"
          >
            Back to Home
          </Link>
          <a
            href="https://twitter.com/startup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            <span>Follow Us for Updates</span>
            <span>→</span>
          </a>
        </motion.div>

        {/* Footer Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-sm text-slate-500"
        >
          Questions? Reach out to <span className="text-slate-700 font-semibold">careers@startup.com</span> or visit our <a href="#faq" className="text-brand-600 underline">FAQ</a>
        </motion.p>
      </motion.div>
    </motion.main>
  )
}
