import React from 'react'
import PageTitleSection from '../components/elements/page-title-section'
import PageTitle from '../components/elements/page-title'
import { Schemes } from '../components/datasets/schemes'

const pageScheme = Schemes.green

const About: React.FC = () => {
  return (
    <PageTitleSection>
      <PageTitle>About</PageTitle>
    </PageTitleSection>
  )
}

export default About
