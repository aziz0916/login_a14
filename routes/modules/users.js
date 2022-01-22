const express = require('express')

const User = require('../../models/user.js')

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
        res.render('welcome', { firstName: item.firstName })
      }
    })
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

module.exports = router
