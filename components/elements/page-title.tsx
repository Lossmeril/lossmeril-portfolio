import { Heading } from '@chakra-ui/react'
import React from 'react'

const PageTitle = ({ children }) => {
  return (
    <>
      <Heading
        as="h1"
        className="page-title"
        variant="site-title"
        pt={2}
        fontSize={{ base: '3em', md: '9em' }}
        width="80%"
      >
        {children}
      </Heading>
      <Heading
        as="p"
        className="page-title shadow"
        variant="site-title"
        pt={2}
        fontSize={{ base: '3em', md: '9em' }}
        width="80%"
      >
        {children}
      </Heading>
    </>
  )
}

export default PageTitle
