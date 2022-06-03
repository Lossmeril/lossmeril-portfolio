import React from 'react'
import PageTitleSection from '../components/elements/page-title-section'
import PageTitle from '../components/elements/page-title'
import { Schemes } from '../components/datasets/schemes'

const pageScheme = Schemes.base

const Home: React.FC = () => {
  return (
    <>
      <PageTitleSection>
        <PageTitle>Michal Špitálský</PageTitle>
      </PageTitleSection>
    </>
  )
}

export default Home
