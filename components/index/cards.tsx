import React from 'react'
import { AspectRatio, Box, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'

const menuCards = [
  { title: 'Filmography', href: '/filmography' },
  { title: 'About', href: '/about' }
]

const Card = ({ title, href }) => {
  return (
    <Link href={href}>
      <AspectRatio ratio={7 / 12} w="100%" h="100%">
        <Box className="menu-card">
          <Heading as="h2" variant="card-title" alignSelf="left">
            {title}
          </Heading>
        </Box>
      </AspectRatio>
    </Link>
  )
}

const MenuCards = () => {
  return (
    <Wrap spacing={5} align="left" my={5}>
      {menuCards.map(card => (
        <WrapItem w={{ base: '80%', md: '25%' }} key={card.title}>
          <Card title={card.title} href={card.href} />
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default MenuCards
