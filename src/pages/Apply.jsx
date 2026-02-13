import React, { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Input from '../components/Input'
import MultiSelect from '../components/MultiSelect'
import Button from '../components/Button'
import { useForm } from '../context/FormContext'
import { useApplicationStatus } from '../context/ApplicationStatusContext'

const roles = ['Frontend', 'Backend', 'Full Stack', 'AI']
const skillOptions = ['React', 'Node.js', 'TypeScript', 'Python', 'Docker', 'SQL', 'CSS']
const experienceLevels = ['Junior', 'Mid', 'Senior']

function validate(values) {
  const errors = {}
  if (!values.fullName) errors.fullName = 'Please enter your full name'
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email'
  if (!values.phone || !/^\+?[0-9\-\s]{7,15}$/.test(values.phone)) errors.phone = 'Enter a valid phone number'
  if (!values.skills || values.skills.length === 0) errors.skills = 'Select at least one skill'
  if (values.portfolio && !/^https?:\/\//.test(values.portfolio)) errors.portfolio = 'Use a valid URL (start with http)'
  return errors
}

export default function Apply() {
  const { data, update } = useForm()
  const { updateStep } = useApplicationStatus()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})

  React.useEffect(() => {
    if (step === 0) updateStep('applying')
  }, [step, updateStep])

  const next = useCallback(() => {
    // Validate only current step fields
    let stepErrors = {}
    
    if (step === 0) {
      if (!data.fullName) stepErrors.fullName = 'Please enter your full name'
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) stepErrors.email = 'Enter a valid email'
      if (!data.phone || !/^\+?[0-9\-\s]{7,15}$/.test(data.phone)) stepErrors.phone = 'Enter a valid phone number'
    } else if (step === 1) {
      if (!data.skills || data.skills.length === 0) stepErrors.skills = 'Select at least one skill'
      if (data.portfolio && !/^https?:\/\//.test(data.portfolio)) stepErrors.portfolio = 'Use a valid URL (start with http)'
    }
    
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }
    
    setErrors({})
    if (step < 2) setStep((s) => s + 1)
    else {
      updateStep('review')
      navigate('/review')
    }
  }, [step, data, navigate, updateStep])

  const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), [])

  const onFile = (file) => update({ resume: file })

  const skillList = useMemo(() => skillOptions, [])

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-b from-brand-50 to-white py-14">
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Indicator / Step Visualization */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex items-center justify-between"
        >
          {[0, 1, 2].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <motion.div
                animate={{ scale: step === s ? 1.1 : 1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition ${
                  s <= step
                    ? 'bg-brand-500 text-white shadow-lg'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {s < step ? '✓' : s + 1}
              </motion.div>
              {s < 2 && (
                <motion.div
                  animate={{ scaleX: step > s ? 1 : 0.5 }}
                  className={`flex-1 h-1 mx-2 transition ${step > s ? 'bg-brand-500' : 'bg-slate-200'}`}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {step === 0 && '📋 Let\'s Get to Know You'}
              {step === 1 && '🛠️ Tell Us About Your Skills'}
              {step === 2 && '👀 Final Review'}
            </h2>
            <p className="mt-2 text-slate-600">
              {step === 0 && 'Start with your basic information.'}
              {step === 1 && 'Help us understand your technical background.'}
              {step === 2 && 'Make sure everything looks good before submitting.'}
            </p>
          </motion.div>

        {/* Step Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {step === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="fullName"
                label="Full name"
                value={data.fullName}
                onChange={(e) => update({ fullName: e.target.value })}
                error={errors.fullName}
                placeholder="Your full name"
              />
              <Input
                id="email"
                label="Email"
                value={data.email}
                onChange={(e) => update({ email: e.target.value })}
                error={errors.email}
                placeholder="you@company.com"
              />
              <Input
                id="phone"
                label="Phone"
                value={data.phone}
                onChange={(e) => update({ phone: e.target.value })}
                error={errors.phone}
                placeholder="+1 555 555 5555"
              />
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Role applying for</label>
                <div className="grid grid-cols-2 gap-2">
                  {roles.map((r) => (
                    <motion.label 
                      key={r} 
                      whileHover={{ scale: 1.02 }}
                      className={`p-3 rounded-lg border-2 flex items-center gap-2 cursor-pointer transition ${
                        data.role === r 
                          ? 'bg-brand-50 border-brand-500 shadow-md' 
                          : 'bg-white border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <input type="radio" name="role" value={r} checked={data.role === r} onChange={() => update({ role: r })} className="cursor-pointer" />
                      <div className="text-sm font-medium">{r}</div>
                    </motion.label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Skills (select at least 1)</label>
                <MultiSelect options={skillList} value={data.skills} onChange={(skills) => update({ skills })} />
                {errors.skills && <div className="text-xs text-red-600 mt-2 font-medium">{errors.skills}</div>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Experience level</label>
                <select value={data.experience} onChange={(e) => update({ experience: e.target.value })} className="w-full sm:w-48 rounded-lg border-2 border-slate-300 px-3.5 py-2.5 font-medium focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition">
                  {experienceLevels.map((ex) => (
                    <option key={ex} value={ex}>{ex}</option>
                  ))}
                </select>
              </div>

              <div>
                <Input id="portfolio" label="Portfolio / GitHub link" value={data.portfolio} onChange={(e) => update({ portfolio: e.target.value })} error={errors.portfolio} placeholder="https://github.com/yourprofile" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Resume Upload</label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg cursor-pointer hover:shadow-md transition font-medium text-slate-700">
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
                    <span>📎 Upload Resume</span>
                  </label>
                  <div className="text-sm text-slate-600">{data.resume ? `✓ ${data.resume.name}` : 'No file chosen'}</div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-lg border-2 border-slate-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase">Full Name</div>
                    <div className="font-bold text-lg text-slate-900 mt-1">{data.fullName}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase">Email</div>
                    <div className="font-bold text-lg text-slate-900 mt-1">{data.email}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase">Role</div>
                    <div className="font-bold text-lg text-brand-600 mt-1">{data.role}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase">Experience</div>
                    <div className="font-bold text-lg text-slate-900 mt-1">{data.experience}</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((s) => (
                      <span key={s} className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">✓ {s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
        </motion.div>

        <div className="mt-10 flex items-center justify-between">
          <div className="text-sm text-slate-500">Need help? Email <span className="text-slate-700 font-semibold">careers@startup.com</span></div>
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={prev}
              disabled={step === 0}
            >
              ← Back
            </motion.button>
            <Button onClick={next}>
              {step < 2 ? 'Next →' : 'Submit Application →'}
            </Button>
          </div>
        </div>
      </div>
    </motion.main>
  )
}
