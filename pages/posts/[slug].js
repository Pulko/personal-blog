import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'

import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api'

import Container from 'components/elements/container'
import PostBody from 'components/post/post-body'
import MorePosts from 'components/post/more-posts'
import PostHeader from 'components/post/post-header'
import SectionSeparator from 'components/elements/section-separator'
import Layout from 'components/layout'
import PostTitle from 'components/post/post-title'

const PostPage = (props) => {
  const {
    post,
    morePosts,
  } = props

  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title}
                </title>
              </Head>

              <PostHeader title={post.title} date={post.date} />

              <PostBody content={post.text} />
            </article>

            {morePosts?.length && (
              <>
                <SectionSeparator />
                <MorePosts posts={morePosts} />
              </>
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}

export default PostPage
