import React, { useEffect, useState } from 'react'
import PageTitleSection from '../components/elements/page-title-section'
import PageTitle from '../components/elements/page-title'
import { Schemes } from '../components/datasets/schemes'
import Section from '../components/elements/section'
import { Heading, Text } from '@chakra-ui/react'

const pageScheme = Schemes.base

const Home: React.FC = () => {
  return (
    <>
      <PageTitleSection>
        <PageTitle>Michal Špitálský</PageTitle>
      </PageTitleSection>
      <Section>
        <Heading color={pageScheme.baseText} zIndex={10}>
          Tohle je Tom, hodnej kluk
        </Heading>
        <Text>
          In my younger and more vulnerable years my father gave me some advice
          that I’ve been turning over in my mind ever since.
        </Text>
        <Text>
          “Whenever you feel like criticizing anyone,” he told me, “just
          remember that all the people in this world haven’t had the advantages
          that you’ve had.”
        </Text>
      </Section>
    </>
  )
}

export default Home
