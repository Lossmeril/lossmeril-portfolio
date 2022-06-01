import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import withTransition from '../components/HOC/withTransition'
import { Schemes } from '../components/datasets/schemes'
import PageTitleSection from '../components/page-title-section'
import PageTitle from '../components/elements/page-title'
import Section from '../components/elements/section'

const PageScheme = Schemes.base

const Home: React.FC = () => {
  return (
    <>
      <PageTitleSection>
        <PageTitle>Michal Špitálský</PageTitle>
        <img src="/img/index/smoke.png" className="title-img smoke" />
        <img src="/img/index/character.png" className="title-img character" />
      </PageTitleSection>
      <Section>
        <Container maxW="container.xl" mt={10} pt={3}>
          <Heading
            variant="section-title"
            fontSize={{ base: '2em', md: '4em' }}
            textAlign="center"
            _after={{
              borderColor: PageScheme.highlight + ' !important'
            }}
          >
            The Great Gatsby
          </Heading>
        </Container>
      </Section>
    </>
  )
}

export default withTransition(Home, PageScheme)
