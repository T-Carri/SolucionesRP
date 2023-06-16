import '@/styles/style.css'

import { createTheme } from '@/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import { TopNav } from '@/components/top-nav';

export default function App({ Component, pageProps }) {
const theme = createTheme()

  return (
<ThemeProvider theme={theme}>
<CssBaseline />

<TopNav/>

  <Component {...pageProps} />

</ThemeProvider>

  ) 
}
