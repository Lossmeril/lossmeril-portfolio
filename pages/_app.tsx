import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../layouts/main'
import theme from '../styles/theme'

const Portfolio = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Portfolio
