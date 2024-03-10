'use client'

import { createTheme } from '@mui/material'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/cyrillic-500.css'
import '@fontsource/raleway/cyrillic-600.css'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif',
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

export default theme
