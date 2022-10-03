import Head from 'next/head'

import { getPortfolio } from 'lib/api'

import Container from 'components/elements/container'
import Intro from 'components/elements/intro'
import Layout from 'components/layout'
import PortfolioTable from 'components/portfolio/portfolio-table'

const Portfolio = (props) => {
  const { portfolio } = props

  return (
    <>
      <Layout>
        <Head>
          <title>Pulko&apos;s Portfolio</title>
        </Head>
        <Container>
          <Intro heading="Portfolio." />

          <PortfolioTable content={portfolio} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const portfolio = ((await getPortfolio()) ?? {})

  return {
    props: { portfolio },
  }
}

export default Portfolio