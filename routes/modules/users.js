const express = require('express')

const User = require('../../models/user.js')
const auth = require('../../auth.js')

const router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body

  User.findOne({ $and: [{ email }, { password }] })
    .lean()
    .then(item => {
      if (!item) {
        const comment = 'Username或Password錯誤'
        res.render('index', { email, comment })
      } else {
        req.session.user = item.firstName
        res.redirect('/users/welcome')
      }
    })
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

router.get('/welcome', auth, (req, res) => {
  const userName = req.session.user

  console.log(req.session)
  console.log(req.sessionID)
  res.render('welcome', { firstName: userName })
})

router.get('/logout', auth, (req, res) => {
  console.log(req.session)
  console.log(req.sessionID)
  req.session.destroy(() => {
    console.log('session destroyed')
  })
  const comment = '你已登出'

  res.render('index', { comment })
})

module.exports = router
