'use client'
import { AppContext } from '@/context/AppContext'
import { useState } from 'react'

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({})
  return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>
}
