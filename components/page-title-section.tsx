import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'

const pageTitleSection: React.FC = ({ children }) => {
  return <Box className="title-section">{children}</Box>
}

export default pageTitleSection
