import { ThemeProvider } from '@emotion/react'
import { theme } from '../helpers/theme'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
