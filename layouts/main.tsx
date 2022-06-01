import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import { Pages } from '../components/datasets/pages'

const GetCurrentPage = path => {
  let thispage
  Pages.pages.map(page => {
    if (page.href === path) {
      thispage = page
    }
  })
  return thispage !== undefined ? thispage : Pages.pages[0]
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
        <Navbar path={router.asPath} thispage={currentPage} />

        <Box style={{ overflow: 'hidden' }}>{children}</Box>
      </Box>
    </Box>
  )
}

export default Main
