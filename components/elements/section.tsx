import React from 'react'
import { Box } from '@chakra-ui/react'

const Section = ({ children }) => {
  return (
    <Box className="section" w="100%" h="100vh" p={10}>
      {children}
    </Box>
  )
}

export default Section
