import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { FormProvider } from './context/FormContext'
import { ApplicationStatusProvider } from './context/ApplicationStatusContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApplicationStatusProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </ApplicationStatusProvider>
    </BrowserRouter>
  </React.StrictMode>
)
