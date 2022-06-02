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
  Link,
  StackItem
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

const MenuNavbarItem = ({ href, path, target, children, ...props }) => {
  const { thispage } = props
  const active = path === href
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        className={active ? 'navbar-link active' : 'navbar-link'}
        style={{
          fontFamily: theme.fonts.heading
        }}
        color={thispage.scheme.menuText}
        _hover={{ color: thispage.scheme.hover }}
        _after={{ borderColor: thispage.scheme.menuHighlight + ' !important' }}
        fontSize={{ base: '1.2em' }}
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
    <Box as="nav" w="100%" zIndex={10} {...props} position="absolute" mt={3}>
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

      {/* MOBILE MENU */}
      <Box flex={1} textAlign="center">
        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList
              style={{
                position: 'absolute',
                borderRadius: '0px',
                top: '50%',
                left: '50%',
                backgroundColor: thispage.scheme.menu
              }}
              w="80vw"
              h="80vh"
              translateX="-50%"
              translateY="-50%"
            >
              <Stack>
                {Pages.pages.map(link => (
                  <StackItem>
                    <MenuNavbarItem
                      href={link.href}
                      path={path}
                      target={undefined}
                      key={link.href}
                      thispage={thispage}
                    >
                      {link.title}
                    </MenuNavbarItem>
                  </StackItem>
                ))}
              </Stack>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
