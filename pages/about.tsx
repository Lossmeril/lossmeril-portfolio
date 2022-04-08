import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'
import ContentTransition from '../components/utility/content-transition-handler'

import withTransition from '../components/HOC/withTransition'

const Home: React.FC = () => {
  return (
    <ContentTransition>
      <Container maxW="container.lg">
        <Box w="100%">
          <Heading as="h1" variant="site-title">
            What do I do?
          </Heading>
          <Text>Lorem Ipsum dolor sit Amet</Text>
        </Box>
      </Container>
    </ContentTransition>
  )
}

export default withTransition(Home)
