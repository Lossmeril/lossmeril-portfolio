import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michal Špitálský" />
        <meta name="author" content="Michal Špitálský" />
        <meta name="author" content="Lossmeril" />
      </Head>

      <Container maxW="container.xl">{children}</Container>
    </Box>
  )
}

export default Main
