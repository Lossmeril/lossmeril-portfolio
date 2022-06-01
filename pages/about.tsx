import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'
import { Schemes } from '../components/datasets/schemes'

import withTransition from '../components/HOC/withTransition'

const PageScheme = Schemes.pink

const Home: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Box w="100%">
        <Heading
          as="h1"
          variant="page-title"
          _after={{ borderColor: PageScheme.highlight + ' !important' }}
        >
          What do I do?
        </Heading>
        <Text>Lorem Ipsum dolor sit Amet</Text>
      </Box>
    </Container>
  )
}

export default withTransition(Home, PageScheme)
