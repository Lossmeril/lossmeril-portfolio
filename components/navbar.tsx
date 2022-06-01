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
  const { thispage } = props
  const active = path === href

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        className={active ? 'navbar-link active' : 'navbar-link'}
        style={{
          fontFamily: theme.fonts.heading
        }}
        color={theme.colors.white}
        _hover={{ color: thispage.scheme.hover }}
        _after={{ borderColor: thispage.scheme.highlight + ' !important' }}
        fontSize={{ base: '12px', md: '20px' }}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path, thispage } = props
  return (
    <Box
      as="nav"
      w="100%"
      zIndex={2}
      {...props}
      position="absolute"
      scrollBehavior="smooth"
      top={3}
    >
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
              thispage={thispage}
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
            thispage={thispage}
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
