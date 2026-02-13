import React from 'react'

export default function Loader() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-white border-slate-200" />
      <span className="text-sm text-slate-600">Submitting...</span>
    </div>
  )
}
