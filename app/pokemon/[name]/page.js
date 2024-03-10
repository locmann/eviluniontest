'use client'

import { PokemonCard } from '@/components/PokemonCard/PokemonCard'
import { useAppContext } from '@/context/AppContext'
import { useEffect, useState } from 'react'
import { getSelectedPokemon } from '@/api/api'
import { usePathname } from 'next/navigation'

export default function Pokemon() {
  const pathname = usePathname()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const pokemonName = pathname.split('/')[2]
    getSelectedPokemon(pokemonName).then((response) => {
      const data = response.data
      setPokemon(data)
    })
  }, [])
  console.log(pokemon)
  return pokemon && <PokemonCard data={pokemon} />
}
