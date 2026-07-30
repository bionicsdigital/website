'use client'

import { Toaster } from 'react-hot-toast'

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4200,
        style: {
          borderRadius: '16px',
          border: '1px solid #d1fae5',
          color: '#0f172a',
          boxShadow: '0 18px 45px rgba(15, 23, 42, 0.14)',
        },
        success: {
          iconTheme: {
            primary: '#00C853',
            secondary: '#ffffff',
          },
        },
      }}
    />
  )
}
