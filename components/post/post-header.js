import DateComponent from './date'
import PostTitle from './post-title'

const PostHeader = (props) => {
  const {
    title,
    date,
  } = props

  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="max-w-2xl mr-auto mb-20">
        <div className="mb-6 text-sm">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
