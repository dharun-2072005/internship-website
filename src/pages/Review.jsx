import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import { useForm } from '../context/FormContext'
import { useApplicationStatus } from '../context/ApplicationStatusContext'
import { submitApplication } from '../services/api'
import Loader from '../components/Loader'

export default function Review() {
  const { data, reset } = useForm()
  const { updateStep, submitApplication: recordSubmission } = useApplicationStatus()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  React.useEffect(() => {
    updateStep('review')
  }, [updateStep])

  const edit = () => {
    navigate('/apply')
  }

  const onSubmit = async () => {
    setError(null)
    setLoading(true)
    try {
      const payload = { ...data, resumeName: data.resume?.name || null }
      await submitApplication(payload)
      recordSubmission()
      reset()
      navigate('/success')
    } catch (err) {
      setLoading(false)
      setError(err.message || 'Submission failed')
    }
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-b from-brand-50 to-white py-14">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-2">📋 Review Your Application</h2>
          <p className="text-lg text-slate-600">Everything look good? Let's submit it!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-5 rounded-lg border border-slate-300 hover:shadow-md transition cursor-pointer bg-white"
              onClick={edit}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm text-slate-500 font-semibold">Full Name</div>
                <span className="text-xs text-brand-600 font-semibold cursor-pointer hover:underline">Edit</span>
              </div>
              <div className="font-bold text-lg text-slate-900">{data.fullName || '—'}</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-5 rounded-lg border border-slate-300 hover:shadow-md transition cursor-pointer bg-white"
              onClick={edit}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm text-slate-500 font-semibold">Contact</div>
                <span className="text-xs text-brand-600 font-semibold cursor-pointer hover:underline">Edit</span>
              </div>
              <div className="font-bold text-lg text-slate-900">{data.email} • {data.phone}</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-5 rounded-lg border border-slate-300 hover:shadow-md transition cursor-pointer bg-white"
              onClick={edit}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm text-slate-500 font-semibold">Role & Experience</div>
                <span className="text-xs text-brand-600 font-semibold cursor-pointer hover:underline">Edit</span>
              </div>
              <div className="font-bold text-lg text-slate-900">{data.role} • {data.experience}</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-5 rounded-lg border border-slate-300 hover:shadow-md transition cursor-pointer bg-white"
              onClick={edit}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm text-slate-500 font-semibold">Skills</div>
                <span className="text-xs text-brand-600 font-semibold cursor-pointer hover:underline">Edit</span>
              </div>
              <div className="font-bold text-lg text-slate-900">{data.skills.length ? data.skills.join(', ') : '—'}</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-5 rounded-lg border border-slate-300 hover:shadow-md transition cursor-pointer bg-white"
              onClick={edit}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm text-slate-500 font-semibold">Portfolio</div>
                <span className="text-xs text-brand-600 font-semibold cursor-pointer hover:underline">Edit</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Resume Card */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200 sticky top-24">
              <div className="text-sm text-blue-600 font-semibold mb-2">📄 Resume</div>
              <div className="text-sm text-slate-700">{data.resume ? `✓ ${data.resume.name}` : '— No file uploaded'}</div>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">Ready to submit? We'll reach out within 3-5 business days.</p>
            </div>

            {/* Terms */}
            <div className="p-4 bg-slate-50 rounded-lg text-xs text-slate-600">
              ✓ By submitting, you agree to our terms and will receive updates via email.
            </div>
          </motion.aside>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 p-4 bg-red-50 border border-red-300 text-red-700 rounded-lg text-sm"
          >
            ⚠️ {error}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button
            className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
            onClick={() => navigate('/apply')}
          >
            ← Back to Edit
          </button>
          <Button onClick={onSubmit} disabled={loading} className="flex-1">
            {loading ? <Loader /> : '✓ Submit Application →'}
          </Button>
        </motion.div>
      </div>
    </motion.main>
  )
}
