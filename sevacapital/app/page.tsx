'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = '/seva.html'
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Redirecting...</p>
    </div>
  )
}
