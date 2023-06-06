import '@/styles/style.css'

import { createTheme } from '@/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
const theme = createTheme()

  return (
<ThemeProvider theme={theme}>
<CssBaseline />
  <Component {...pageProps} />

</ThemeProvider>

  ) 
}
