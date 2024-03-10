import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export const getPokemons = async () => {
  const res = await instance.get('pokemon/', {
    params: {
      limit: 10,
    },
  })

  return res
}

export const getSelectedPokemon = async (name) => {
  const res = await instance.get(`pokemon/${name}`)

  return res
}
