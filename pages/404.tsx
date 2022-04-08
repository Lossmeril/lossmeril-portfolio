import { Container, Box, Heading, Text } from '@chakra-ui/react'
import withTransition from '../components/HOC/withTransition'
import Cards from '../components/index/cards'
import ContentTransition from '../components/utility/content-transition-handler'

const NotFound = () => {
  return (
    <ContentTransition>
      <Container maxW="container.lg">
        <Box width="100%">
          <Heading as="h1" variant="site-title">
            404
          </Heading>
          <Text>All you had to do was to follow the damn train, CJ!</Text>
          <Cards />
        </Box>
      </Container>
    </ContentTransition>
  )
}

export default withTransition(NotFound)
