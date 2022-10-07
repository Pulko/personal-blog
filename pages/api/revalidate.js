function sendResponse(res, { code = 200, json = {} }) {
  return res.status(code).json(json)
}

export default async function handler(req, res) {
  let inboundRevalToken = req.headers['x-vercel-reval-key']

  if (!inboundRevalToken) {
    return sendResponse(res, { code: 401, json: { message: 'x-vercel-reval-key header not defined' } })
  } else if (inboundRevalToken !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return sendResponse(res, { code: 401, json: { message: 'x-vercel-reval-key does not match' } })
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
    .then(() => sendResponse(res, { json: { revalidated: true } }))
    .catch((error) => sendResponse(res, { code: 500, json: { message: "not revalidated", error } }))
}
