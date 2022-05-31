import React from 'react'
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  GridItem
} from '@chakra-ui/react'
import withTransition from '../components/HOC/withTransition'
import { Schemes } from '../components/datasets/schemes'

const Home: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Box width="100%">
        <SimpleGrid columns={2}>
          <GridItem>
            <Box>
              <Heading
                as="h1"
                variant="site-title"
                pt={2}
                fontSize={{ base: '3em', md: '7em' }}
              >
                Michal Špitálský
              </Heading>
            </Box>
          </GridItem>
          <GridItem>Hello</GridItem>
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default withTransition(Home, Schemes.base)
