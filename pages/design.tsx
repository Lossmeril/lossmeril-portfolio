import React from 'react'
import PageTitleSection from '../components/elements/page-title-section'
import PageTitle from '../components/elements/page-title'
import { Schemes } from '../components/datasets/schemes'

const pageScheme = Schemes.pink

const Design: React.FC = () => {
  return (
    <>
      <PageTitleSection>
        <PageTitle>Design</PageTitle>
      </PageTitleSection>
    </>
  )
}

export default Design
