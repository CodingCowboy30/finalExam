// src/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#C0C0C0', // Silver
    },
    secondary: {
      main: '#ADD8E6', // Light Blue
    },
    background: {
      default: '#D2B48C', // Tan
    },
    text: {
      primary: '#000000', // Black
    },
  },
  typography: {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
})

export default theme
