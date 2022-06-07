import PageTitleSection from '../components/elements/page-title-section'
import PageTitle from '../components/elements/page-title'
import { Schemes } from '../components/datasets/schemes'
import Section from '../components/elements/section'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const pageScheme = Schemes.base

const Home: React.FC = () => {
  return (
    <>
      <PageTitleSection>
        <PageTitle>Michal Špitálský</PageTitle>
      </PageTitleSection>
      <Section>
        <SimpleGrid columns={2}>
          <Box className="relative">
            <Heading
              className="heading-left"
              color={pageScheme.baseText}
              zIndex={10}
            >
              We can
              <br /> live in
              <br />  a world
              <br /> that we <br />
              <span
                style={{
                  color: pageScheme.highlight,
                  WebkitTextFillColor: pageScheme.highlight,
                  WebkitTextStrokeWidth: 0
                }}
              >
                design
              </span>
            </Heading>
          </Box>
          <Box color={{ color: pageScheme.baseText }}>
            <Text>I am a bright explosion of untamed creativity</Text>
          </Box>
        </SimpleGrid>
      </Section>
    </>
  )
}

export default Home
