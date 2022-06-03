import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import { Pages } from '../components/datasets/pages'
import PageBGs from '../components/transitions/page-bgs'
import PageIMGs from '../components/transitions/page-imgs'
import { useState, useEffect } from 'react'

// SELECTS PAGE'S VALUE FROM ARRAY BASED ON THIS PAGE'S URL
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
  // GETS CURENT PAGE'S VALUES
  const currentPage = GetCurrentPage(router.asPath)

  // WATCH SCROLL OFFSET
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return (
    <>
      {/*COLOURFUL BACKGROUNDS AND TRANSITION MANAGER*/}
      <PageBGs dataState={currentPage.bg} />

      {/*FOREGROUND IMAGE AND TRANSITION MANAGER*/}
      <PageIMGs dataState={currentPage.bg} dataActive={offset < 150} />

      <Box as="main">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Michal Špitálský" />
          <meta name="author" content="Michal Špitálský" />
          <meta name="author" content="Lossmeril" />
        </Head>

        <Box>
          <Navbar path={router.asPath} thispage={currentPage} />

          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  )
}

export default Main
