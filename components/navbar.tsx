import React from 'react'
import { Container, Box, Heading, Text, Stack } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <Stack>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </Stack>
  )
}

export default Navbar
