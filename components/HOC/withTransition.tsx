import { motion } from 'framer-motion'
import theme from '../../styles/theme'
import Image from 'next/image'
import { AspectRatio, Box, Center } from '@chakra-ui/react'

const withTransition = OriginalComponent => {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        style={{ background: 'HotPink' }}
        className="transition slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        style={{ background: theme.colors.green.primary }}
        className="transition slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        style={{ background: 'HotPink' }}
        className="transition slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        style={{ background: theme.colors.green.primary }}
        className="transition slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          width: '100vw',
          height: '100vh'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <Center width="100vw" height="100vh">
          <Box maxW={{ base: '80vw', md: '700px' }}>
            <Image
              src="/img/logo_white.png"
              height="1000px"
              width="1000px"
              objectFit="contain"
              className="transition-logo"
            />
          </Box>
        </Center>
      </motion.div>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          width: '100vw',
          height: '100vh'
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Center width="100vw" height="100vh">
          <Box maxW={{ base: '80vw', md: '700px' }}>
            <Image
              src="/img/logo_white.png"
              height="1000px"
              width="1000px"
              objectFit="contain"
              className="transition-logo"
            />
          </Box>
        </Center>
      </motion.div>
    </>
  )
}

export default withTransition
