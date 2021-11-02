const express = require('express')
require('dotenv').config({ path: '.env' })
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const logger = require('./utils/logger')

const app = express()
const port = process.env.HTTP_PORT

const { controllerAdd, controllerGet } = require("./controler/CRUDControler");
// Middleware
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

// insert your router here

app.post('/cards', function (req, res) {
  controllerAdd(req, res);
});

app.get('/cards', function (req, res) {
  controllerGet(req, res);
});


app.get('/cardsId', function (req, res) {
  res.send('bienvenu pour les Id');
});

app.delete('/cardsDel', function (req, res) {
  res.send('bienvenu pour les suppresions');
});

app.patch('/cardsUptade', function (req, res) {
  res.send('bienvenu pour les maj');
});

//other

const server = app.listen(port, () => {
  logger.log(`API listening at http://localhost:${port}`)
})

module.exports = server;