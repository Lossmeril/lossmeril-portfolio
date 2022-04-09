import { motion } from 'framer-motion'

const ContentTransition = ({ children }) => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          duration: 1,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ContentTransition
