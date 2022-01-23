function auth(req, res, next) {
  if (req.session.user) {
    console.log('authenticated')
    next() // 引發下一個 middleware
  } else {
    console.log('not authenticated')
    return res.redirect('/')
  }
}

module.exports = auth
