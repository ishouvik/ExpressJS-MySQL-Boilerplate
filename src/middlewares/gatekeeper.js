// Protect resources from unauthorized access
exports.internalV1Auth = function (req, res, next) {
  const authorization = req.headers.authorization
  const token = authorization ? authorization.split(' ').pop() : ''

  if (token === process.env.INTERNAL_API_KEY) {
    next()
  } else {
    res.status(401).end()
  }
}
