import DateComponent from './date'

const PostPreview = (props) => {
  const {
    title,
    date,
    description,
    slug,
  } = props

  return (
    <div className="p-6 m-2 rounded-lg bg-slate-900 text-sky-100 group transition">
      <a href={`/posts/${slug}`}>
        <h3 className="text-4xl mb-1 leading-snug font-bold transition group-hover:underline text-emerald-400">
          {title}
        </h3>
        <div className="text-xs mb-4">
          <DateComponent dateString={date} />
        </div>
        <p className="text-lg mb-4">
          {description}
        </p>
      </a>
    </div>
  )
}

export default PostPreview
