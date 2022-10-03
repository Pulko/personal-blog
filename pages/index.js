import Head from 'next/head'
import Image from 'next/image'

import Container from 'components/elements/container'
import Intro from 'components/elements/intro'
import Layout from 'components/layout'

const Index = () => {
  const diffYears = Math.floor((new Date() - new Date('June 20, 2018')) / (1000 * 60 * 60 * 24 * 356))

  return (
    <Layout>
      <Head>
        <title>Meet Pulko</title>
      </Head>
      <Container>
        <Intro heading="Hey :)" />

        <div className="flex flex-col md:flex-row text-center">
          <div className="mx-0">
            <Image src="/avatar.jpg" alt="my avatar when I am smiling" width={300} height={250} layout="fixed" />
          </div>
          <div className="text-left text-xl text-slate-900 ml-0 mt-20 md:mt-0 sm:ml-20 font-medium">
            <h3 className="text-2xl font-bold">
              {'Fedor Tkachenko'}
            </h3>

            <p className="my-4">
              {`Software Engineer with ${diffYears} years of Frontend Development experience.`}
              <br />
              {'iOS Developer on the weekends. Cat fan on a daily basis.'}
              <br />
              {' I love travelling and doing something new.'}
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Index
