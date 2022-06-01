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
          ease: [0.6, -0.05, 0.01, 0.99]
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
      {/* <motion.div
        style={{ background: colors.white, rotate: '45deg' }}
        className="transition slide-in"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 0, opacity: 0 }}
        exit={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        style={{ background: colors.white, rotate: '45deg' }}
        className="transition slide-out"
        initial={{ scaleX: 1, opacity: 1 }}
        animate={{ scaleX: 0, opacity: 0 }}
        exit={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      ></motion.div> */}
    </Box>
  )
}

export default withTransition
