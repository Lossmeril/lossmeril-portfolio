import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import { Pages } from '../components/datasets/pages'

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

  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michal Špitálský" />
        <meta name="author" content="Michal Špitálský" />
        <meta name="author" content="Lossmeril" />
      </Head>

      <Box minH="100vh">
        <Navbar path={router.asPath} thisPage={currentPage} />

        <Box style={{ overflowX: 'hidden' }}>{children}</Box>
      </Box>
    </Box>
  )
}

export default Main
