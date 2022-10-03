
const Badge = (props) => {
  const { children } = props

  return (
    <div className="rounded-md bg-emerald-600 py-1 px-2 m-1 text-white">
      {children}
    </div>
  )
}

export default Badge
