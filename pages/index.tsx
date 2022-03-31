import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <Container bg="" maxW="container.lg">
      <Box height="100vh" width="100%">
        <Heading as="h1" variant="site-title">
          Michal Špitálský
        </Heading>
        <Text>Hello, world.</Text>
      </Box>
    </Container>
  )
}

export default Home
