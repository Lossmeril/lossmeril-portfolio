import { motion } from 'framer-motion'
import { Box, Container } from '@chakra-ui/react'
import { Schemes } from '../datasets/schemes'

const withTransition = (OriginalComponent, scheme = Schemes.base) => {
  return () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
    >
      <Box
        minH="100vh"
        style={{
          backgroundColor: scheme.bg,
          background:
            'linear-gradient(90deg, ' +
            scheme.bg +
            ' 0%, ' +
            scheme.bgDarker +
            ' 100%)',
          overflowX: 'hidden'
        }}
      >
        <Container maxW="container.xl" mt="20vh">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            style={{}}
          >
            <OriginalComponent />
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  )
}

export default withTransition
