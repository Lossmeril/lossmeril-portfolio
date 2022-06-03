import { IoLogoGithub } from 'react-icons/io5'
import { Box, Container, Stack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Pages } from './datasets/pages'
import theme from '../styles/theme'

const NavbarItem = ({ href, path, target, children, ...props }) => {
  const { thispage } = props
  const active = path === href

  return (
    <NextLink href={href} passHref>
      <Link
        className={active ? 'navbar-link active' : 'navbar-link'}
        style={{
          fontFamily: theme.fonts.heading,
          color: thispage.scheme.baseText
        }}
        _hover={{ color: thispage.scheme.hover }}
        _after={{ borderColor: thispage.scheme.highlight + ' !important' }}
        fontSize={{ base: '12px', md: '20px' }}
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
    <Box as="nav" w="100%" zIndex={10} {...props} position="absolute" mt={3}>
      <Container display="flex" p={2} maxW="container.xl" flexWrap="wrap">
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
