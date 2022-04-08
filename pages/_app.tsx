import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../layouts/main'
import theme from '../styles/theme'
import { AnimatePresence } from 'framer-motion'

const Portfolio = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Portfolio
