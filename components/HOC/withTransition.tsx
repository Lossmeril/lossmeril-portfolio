import { motion } from 'framer-motion'
import { Box, Container } from '@chakra-ui/react'
import { Schemes } from '../datasets/schemes'

const withTransition = (OriginalComponent, scheme = Schemes.base) => {
  return () => (
    <>
      <motion.div
        initial={{ zIndex: 2, x: '-100%' }}
        animate={{ zIndex: 1, x: 0 }}
        exit={{ zIndex: 1, x: '100%' }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 50
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
          <motion.div
            initial={{ opacity: 0, skewX: '-60deg' }}
            animate={{ opacity: 1, skewX: 0 }}
            exit={{ opacity: 0, skewX: '-60deg' }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 50
            }}
            style={{}}
          >
            <OriginalComponent />
          </motion.div>
        </Box>
      </motion.div>
    </>
  )
}

export default withTransition
