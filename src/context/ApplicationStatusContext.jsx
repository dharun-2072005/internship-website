import React, { createContext, useContext, useState, useMemo } from 'react'

const ApplicationStatusContext = createContext(null)

export const ApplicationStatusProvider = ({ children }) => {
  const [status, setStatus] = useState({
    step: 'home', // home, applying, review, submitted, success
    completionPercentage: 0,
    submittedAt: null,
    applicationId: null,
    error: null,
  })

  const updateStatus = (updates) => {
    setStatus((prev) => ({ ...prev, ...updates }))
  }

  const updateStep = (newStep) => {
    const stepProgress = {
      home: 0,
      applying: 33,
      review: 66,
      submitted: 95,
      success: 100,
    }
    updateStatus({
      step: newStep,
      completionPercentage: stepProgress[newStep] || 0,
    })
  }

  const submitApplication = () => {
    updateStep('submitted')
    setStatus((prev) => ({
      ...prev,
      submittedAt: new Date().toISOString(),
      applicationId: `APP-${Date.now()}`,
    }))
  }

  const reset = () => {
    setStatus({
      step: 'home',
      completionPercentage: 0,
      submittedAt: null,
      applicationId: null,
      error: null,
    })
  }

  const value = useMemo(
    () => ({ status, updateStatus, updateStep, submitApplication, reset }),
    [status]
  )

  return (
    <ApplicationStatusContext.Provider value={value}>
      {children}
    </ApplicationStatusContext.Provider>
  )
}

export const useApplicationStatus = () => {
  const ctx = useContext(ApplicationStatusContext)
  if (!ctx) throw new Error('useApplicationStatus must be used inside ApplicationStatusProvider')
  return ctx
}
