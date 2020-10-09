const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const targets = require('./targets.json')


//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'} ))
app.set('view engine', 'handlebars')


//setting route
app.get('/', (req, res) => {
  res.render('index', { targets })
})

//start Express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})