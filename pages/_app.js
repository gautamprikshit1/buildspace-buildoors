import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import WalletContextProvider from '../components/WalletContextProvider'

const colors = {
  background: "#1F1F1F",
  accents: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)"
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <Component {...pageProps} />)
      </WalletContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
