// pages/api/revalidate.js

export default async function handler(req, res) {
  let inboundRevalToken = req.headers['x-vercel-reval-key']

  if (!inboundRevalToken) {
    return res
      .status(401)
      .json({ message: 'x-vercel-reval-key header not defined' })
  } else if (inboundRevalToken !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return res
      .status(401)
      .json({ message: 'Invalid token' })
  }

  let postSlug = req.body.fields.slug?.['en-US']
  let portfolio = req.body.fields.portfolio

  let promises = [res.revalidate('/posts')]

  if (postSlug) {
    promises.push(res.revalidate(`/posts/${postSlug}`))
  }

  if (!!portfolio) {
    promises.push(res.revalidate('/portfolio'))
  }

  return await Promise.all(promises)
    .then(() => res.json({ revalidated: true }))
    .catch((err) => res.status(500).send("Not revalidated", err))
}
