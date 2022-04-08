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
            Michal Špitálský
          </Heading>
          <Text>
            I am a freelance designer, videographer and artist from Czechia who
            likes not to take life too seriously. I love to tweak and design all
            things digital or physical while exploring all the different fields
            of IT.
          </Text>
          <Text>
            In my free time, I seek hobbies where I can make use of my
            creativity and sense of humour. I am also working on my feature
            documentary "Garden of Eden".
          </Text>
        </Box>
      </Container>
    </PageTransition>
  )
}

export default withTransition(Home)
