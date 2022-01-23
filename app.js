const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')

require('./config/mongoose.js')
const routes = require('./routes')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'mySecret',
  name: 'user', // optional
  saveUninitialized: false,
  resave: true,
}))
app.use(routes)

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})
