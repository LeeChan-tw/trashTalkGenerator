const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const targets = require('./data/targets.json')
const trashTalkGenerator = require('./trashTalkGenerator.js')


//setting template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main', 
  helpers: {
    equalCheck: function (a, b) {
      if (a === b) {
    return "checked";
    }
  }
  }
}))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))


//setting route
app.get('/', (req, res) => {
  res.render('index', { targets })
})

app.post('/', (req, res) => {
  const role = req.body.target_en
  const sample = trashTalkGenerator(role)
  console.log(sample)
  console.log(role)
  res.render('index', { sample, targets, role })
})


//start Express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})