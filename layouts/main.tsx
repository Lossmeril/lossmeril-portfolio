import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import { Pages } from '../components/datasets/pages'
import theme from '../styles/theme'

const GetCurrentPage = path => {
  let thisPage
  Pages.pages.map(page => {
    if (page.href === path) {
      thisPage = page
    }
  })
  return thisPage !== undefined ? thisPage : Pages.pages[0]
}

const Main = ({ children, router }) => {
  const currentPage = GetCurrentPage(router.asPath)

  const bgColor = theme.colors[currentPage.color].main
  const bgColorDarker = theme.colors[currentPage.color].darker

  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michal Špitálský" />
        <meta name="author" content="Michal Špitálský" />
        <meta name="author" content="Lossmeril" />
      </Head>

      <Box
        minH="100vh"
        style={{
          backgroundColor: bgColor,
          background:
            'linear-gradient(90deg, ' +
            bgColor +
            ' 0%, ' +
            bgColorDarker +
            ' 100%)',
          transition: 'background 2s',
          transitionDelay: '2000'
        }}
      >
        <Navbar path={router.asPath} thisPage={currentPage} />

        <Container maxW="container.xl" mt={14}>
          {children}
        </Container>
      </Box>
    </Box>
  )
}

export default Main
