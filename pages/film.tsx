import React from 'react'
import PageTitleSection from '../components/elements/page-title-section'
import PageTitle from '../components/elements/page-title'
import { Schemes } from '../components/datasets/schemes'

const pageScheme = Schemes.gold

const Film: React.FC = () => {
  return (
    <>
      <PageTitleSection>
        <PageTitle>Film</PageTitle>
      </PageTitleSection>
    </>
  )
}

export default Film
