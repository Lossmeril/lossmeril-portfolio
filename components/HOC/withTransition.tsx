import { motion } from 'framer-motion'
import { Box, Container } from '@chakra-ui/react'
import { Schemes } from '../datasets/schemes'

const withTransition = (OriginalComponent, scheme = Schemes.base) => {
  return () => (
    <Box position="fixed" height="100vh" width="100vw" overflowX="hidden">
      <motion.div
        initial={{ zIndex: 2, x: '-100%' }}
        animate={{ zIndex: 1, x: 0 }}
        exit={{ zIndex: 1, x: '100%' }}
        transition={{
          duration: 1,
          type: 'spring'
        }}
        style={{ width: '100vw', position: 'absolute' }}
      >
        <Box
          minH="100vh"
          style={{
            backgroundColor: scheme.bg,
            background:
              'linear-gradient(135deg, ' +
              scheme.bg +
              ' 0%, ' +
              scheme.bgDarker +
              ' 100%)',
            overflowX: 'hidden'
          }}
        >
          <Container maxW="container.xl" mt="20vh">
            <motion.div
              initial={{ opacity: 0, skewX: '-60deg' }}
              animate={{ opacity: 1, skewX: 0 }}
              exit={{ opacity: 0, skewX: '-60deg' }}
              transition={{
                duration: 1,
                type: 'spring'
              }}
              style={{}}
            >
              <OriginalComponent />
            </motion.div>
          </Container>
        </Box>
      </motion.div>
    </Box>
  )
}

export default withTransition
