import { motion } from 'framer-motion'

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      exit={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
