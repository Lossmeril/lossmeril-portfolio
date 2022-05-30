import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../components/navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michal Špitálský" />
        <meta name="author" content="Michal Špitálský" />
        <meta name="author" content="Lossmeril" />
      </Head>

      <Box minH="100vh">
        <Navbar path={router.asPath} />

        <Container maxW="container.xl" mt={14}>
          {children}
        </Container>
      </Box>
    </Box>
  )
}

export default Main
