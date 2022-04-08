import { Text } from '@chakra-ui/react'

const messages = [
  'All you had to do was follow the damn page, CJ!',
  'The page is a lie!',
  "It's not very effective"
]

const ErrorMessage = () => {
  return (
    <Text fontSize="3em">
      {messages[Math.round(Math.random() * (messages.length - 1))]}
    </Text>
  )
}

export default ErrorMessage
