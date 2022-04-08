import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'
import PageTransition from '../components/utility/transition-handler'

import withTransition from '../components/HOC/withTransition'

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Container maxW="container.lg">
        <Box width="100%">
          <Heading as="h1" variant="site-title">
            What do I do?
          </Heading>
          <Text>Lorem Ipsum dolor sit Amet</Text>
        </Box>
      </Container>
    </PageTransition>
  )
}

export default withTransition(Home)
