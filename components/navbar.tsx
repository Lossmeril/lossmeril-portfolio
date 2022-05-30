import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import {
  Box,
  Container,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Pages } from './datasets/pages'
import theme from '../styles/theme'

const NavbarItem = ({ href, path, target, children, ...props }) => {
  const active = path === href

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={3}
        fontSize={{ base: '12px', md: '20px' }}
        style={{
          textTransform: 'lowercase',
          fontFamily: theme.fonts.heading
        }}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box as="nav" w="100%" zIndex={1} {...props}>
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        flexWrap="wrap"
        alignItems="center"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="left"
          flexGrow={1}
          my={4}
        >
          {Pages.pages.map(link => (
            <NavbarItem
              href={link.href}
              path={path}
              target={undefined}
              key={link.href}
            >
              {link.title}
            </NavbarItem>
          ))}
          <NavbarItem
            target="_blank"
            href="https://github.com/craftzdog/craftzdog-homepage"
            path={path}
            display="inline-flex"
            alignItems="left"
            pl={2}
          >
            <IoLogoGithub style={{ marginRight: '0.5em' }} />
            Source
          </NavbarItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
