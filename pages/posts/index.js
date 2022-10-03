import Head from 'next/head'

import Container from 'components/elements/container'
import PostPreview from 'components/post/post-preview'
import Intro from 'components/elements/intro'
import Layout from 'components/layout'

import { getAllPostsForHome } from 'lib/api'

const PostsPage = (props) => {
  const { allPosts } = props

  return (
    <Layout>
      <Head>
        <title>Pulko&apos;s Blog</title>
      </Head>
      <Container>
        <Intro heading="Blog." />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:gap-x-10 gap-y-8 md:gap-y-16">
          {allPosts.map(post => <PostPreview {...post} key={post.slug} />)}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = ((await getAllPostsForHome(preview)) ?? [])

  return {
    props: { preview, allPosts },
  }
}

export default PostsPage
