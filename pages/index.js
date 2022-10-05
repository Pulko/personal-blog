import Head from 'next/head'
import Image from 'next/image'

import Container from 'components/elements/container'
import Intro from 'components/elements/intro'
import Layout from 'components/layout'
import Link from 'next/link'

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
          <div className="text-left text-xl text-slate-900 ml-0 mt-20 md:mt-0 sm:ml-20 font-medium text-center md:text-left">
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

            <div className="flex md:justify-between justify-around lg:w-1/2">
              <Link href="/portfolio">
                <a className="hover:underline text-emerald-600 inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>

                  <p className="mx-1">Portfolio</p>
                </a>
              </Link>

              <Link href="/posts">
                <a className="hover:underline text-emerald-600 inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <p className="mx-1">Posts</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Index
