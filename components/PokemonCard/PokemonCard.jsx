import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const PokemonCard = ({ data }) => {
  const { height, name, sprites, id, stats, moves } = data
  return (
    <Box
      width="100%"
      height="500px"
      sx={{ background: 'black', padding: '44px 44px 16px', display: 'grid' }}
    >
      <Typography
        fontSize="48px"
        fontWeight="700"
        lineHeight="100%"
        component="h3"
        color="secondary"
        mb="44px"
      >
        {name}
      </Typography>
      <Box width="100%" height="200px" mb="44px" position="relative">
        <Image
          src={sprites.front_default}
          alt="Спрайт покемона"
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <Typography
        fontSize="17px"
        fontWeight="400"
        lineHeight="150%"
        letterSpacing="0%"
        color="secondary"
      >
        Снялся в {moves.length} сериях
      </Typography>
      <Typography
        fontSize="17px"
        fontWeight="400"
        lineHeight="150%"
        letterSpacing="0%"
        color="secondary"
      >
        Id: {id}
      </Typography>
      <Typography
        fontSize="17px"
        fontWeight="400"
        lineHeight="150%"
        letterSpacing="0%"
        color="secondary"
      >
        height: {height}
      </Typography>
      <Typography
        fontSize="17px"
        fontWeight="400"
        lineHeight="150%"
        letterSpacing="0%"
        color="secondary"
      >
        attack: {stats.find((item) => item.stat.name === 'attack').base_stat}
      </Typography>
    </Box>
  )
}
