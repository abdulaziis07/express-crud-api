// logRequest path middleware
const logRequest = (req, res, next) => {
  console.log(`Request to url: ${req.path}`)
  next()
}

module.exports = logRequest
