import Layout from '../comps/Layout'
import '../styles/globals.css'
// import { ThemeProvider, theme } from 
// "@chakra-ui/core"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
