import { AppBar, Box, Container, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: 'black' }}>
      <Container>
        <Box sx={{ border: 1 }}>
          <Typography>ПОКЕМОНЫ API</Typography>
        </Box>
        <Typography>click</Typography>
      </Container>
    </AppBar>
  )
}
