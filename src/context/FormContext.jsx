import React, { createContext, useContext, useState, useMemo } from 'react'

const FormContext = createContext(null)

const initial = {
  fullName: '',
  email: '',
  phone: '',
  role: 'Frontend',
  skills: [],
  experience: 'Junior',
  portfolio: '',
  resume: null,
}

export const FormProvider = ({ children }) => {
  const [data, setData] = useState(initial)
  const update = (patch) => setData((s) => ({ ...s, ...patch }))
  const reset = () => setData(initial)

  const value = useMemo(() => ({ data, update, reset }), [data])

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useForm = () => {
  const ctx = useContext(FormContext)
  if (!ctx) throw new Error('useForm must be used inside FormProvider')
  return ctx
}
