import { Container, Box, Heading, Text } from '@chakra-ui/react'
import ErrorMessage from '../components/404/error-messages'
import withTransition from '../components/HOC/withTransition'

const NotFound = () => {
  return (
    <Container maxW="container.xl">
      <Box width="100%">
        <Heading as="h1" variant="site-title">
          404
        </Heading>
        <ErrorMessage />
      </Box>
    </Container>
  )
}

export default withTransition(NotFound)
