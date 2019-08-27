const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const talkRubbishGenerator = require('./talk_rubbish_generator')
const port = 3000

const Handlebars = require("handlebars");

Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const selectedJob = req.body
  const sentence = talkRubbishGenerator(selectedJob)
  res.render('index', ({ sentence, job: selectedJob.jobs }))
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})