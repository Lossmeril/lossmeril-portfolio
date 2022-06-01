import React from 'react'
import { Box } from '@chakra-ui/react'
import { Schemes } from '../datasets/schemes'

const Section = ({ children, scheme = Schemes.base }) => {
  return (
    <Box
      className="section"
      w="100%"
      h="100vh"
      bg={scheme.bg}
      bgGradient={'linear(to-br, ' + scheme.bg + ', ' + scheme.bgDarker + ')'}
      pt={10}
    >
      {children}
    </Box>
  )
}

export default Section
