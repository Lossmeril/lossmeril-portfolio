import { motion } from 'framer-motion'
import theme from '../../styles/theme'
import Image from 'next/image'
import { AspectRatio, Center } from '@chakra-ui/react'

const withTransition = OriginalComponent => {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        style={{ background: theme.colors.green.primary }}
        className="transition slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        style={{ background: theme.colors.green.primary }}
        className="transition slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>

      <Center width="100%" height="100%">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <AspectRatio maxWidth={{ base: '80vw', md: '800px' }} ratio={20 / 13}>
            <Image
              src="/img/logo_white.png"
              height="100%"
              width="100%"
              objectFit="cover"
            />
          </AspectRatio>
        </motion.div>
      </Center>
    </>
  )
}

export default withTransition
