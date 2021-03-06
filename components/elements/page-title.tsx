import { Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const PageTitle = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0, 0, 0.58, 1] }}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <Heading
        as="h1"
        className="page-title"
        variant="site-title"
        pt={2}
        fontSize={{ base: '10vw' }}
        width="80%"
      >
        {children}
      </Heading>
    </motion.div>
  )
}

export default PageTitle
