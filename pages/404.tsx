import { Container, Box, Heading, Text } from '@chakra-ui/react'
import ErrorMessage from '../components/404/error-messages'
import withTransition from '../components/HOC/withTransition'
import ContentTransition from '../components/utility/content-transition-handler'

const NotFound = () => {
  return (
    <ContentTransition>
      <Container maxW="container.xl">
        <Box width="100%">
          <Heading as="h1" variant="site-title">
            404
          </Heading>
          <ErrorMessage />
        </Box>
      </Container>
    </ContentTransition>
  )
}

export default withTransition(NotFound)
