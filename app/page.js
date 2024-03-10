'use client'
import { useAppContext } from '@/context/AppContext'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function Home() {
  const { state } = useAppContext()

  useEffect(() => {
    if (state.length > 0) {
      redirect(`/pokemon/${state[0].name}`)
    }
  }, [state])
  return ''
}
