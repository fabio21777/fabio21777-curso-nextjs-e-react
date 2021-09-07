import 'tailwindcss/tailwind.css'
import { AppProvider } from '../data/context/AppContext'
import '../styles/globals.module.css'
function MyApp({ Component, pageProps }) {
  return (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
  )
}

export default MyApp
