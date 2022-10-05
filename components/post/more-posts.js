import PostPreview from './post-preview'

const MorePosts = (props) => {
  const { posts } = props

  return (
    <section>
      <h3 className="mb-8 text-4xl font-bold tracking-tighter leading-tight text-center">
        More Posts
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts?.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default MorePosts
