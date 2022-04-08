import React from 'react'
import { AspectRatio, Box, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'

const menuCards = [
  { title: 'Filmography', href: '/filmography' },
  { title: 'About', href: '/about' }
]

const Card = ({ title, href }) => {
  return (
    <Link href={href} passHref>
      <AspectRatio ratio={7 / 12} w="100%" h="100%">
        <Box w="100%" h="100%" border="1px white solid" borderRadius="10px">
          <Heading as="h2">{title}</Heading>
        </Box>
      </AspectRatio>
    </Link>
  )
}

const MenuCards = () => {
  return (
    <Wrap spacing={5} align="center" my={5}>
      {menuCards.map(card => (
        <WrapItem w={{ base: '80%', md: '25%' }}>
          <Card title={card.title} href={card.href} key={card.title} />
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default MenuCards
