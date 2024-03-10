'use client'

import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#131313', boxShadow: 'none' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ border: 1 }}>
            <Typography sx={{ p: 1 }}>ПОКЕМОНЫ API</Typography>
          </Box>
          <Typography>click</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
