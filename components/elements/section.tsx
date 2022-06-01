import React from 'react'
import { Box } from '@chakra-ui/react'
import { Schemes } from '../datasets/schemes'

const Section = ({ children, scheme = Schemes.base }) => {
  return (
    <Box className="section" w="100%" h="100vh" p={10}>
      {children}
    </Box>
  )
}

export default Section
