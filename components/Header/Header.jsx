'use client'

import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { Click } from '@/svg'

export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#131313', boxShadow: 'none' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ border: 1 }}>
            <Typography sx={{ p: 1 }}>ПОКЕМОНЫ API</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Click />
            <Box sx={{ flexDirection: 'row' }}>
              <Typography>Нажмите на</Typography>
              <Typography>нужного Покемона</Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
