import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'
import { Schemes } from '../components/datasets/schemes'

import PageTitleSection from '../components/page-title-section'

const PageScheme = Schemes.pink

const Home: React.FC = () => {
  return (
    <PageTitleSection>
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
    </PageTitleSection>
  )
}

export default Home
