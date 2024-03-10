'use client'

import { useEffect, useState } from 'react'
import { getPokemons } from '@/api/api'
import { Chip, Grid } from '@mui/material'
import Link from 'next/link'

export const Chips = () => {
  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    getPokemons().then((response) => {
      const data = response.data.results
      setPokemons(data)
    })
  }, [])

  return (
    <Grid container spacing={2}>
      {pokemons
        ? pokemons.map((pokemon) => (
            <Grid item>
              <Link href={`/pokemon/${pokemon.name}`}>
                <Chip
                  sx={{
                    backgroundColor: '#1986EC',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '44px',
                    fontSize: '17px',
                    fontWeight: '400',
                  }}
                  label={pokemon.name}
                />
              </Link>
            </Grid>
          ))
        : null}
    </Grid>
  )
}
