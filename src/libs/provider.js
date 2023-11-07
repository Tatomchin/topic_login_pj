"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export function CustomProvicder({children}) {
  return (
    <div>
        <SessionProvider>
            {children}
        </SessionProvider>
    </div>
  )
}
