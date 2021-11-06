const express = require('express')
require('dotenv').config({ path: '.env' })
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const logger = require('./utils/logger')

const app = express()
const port = process.env.HTTP_PORT

const { controllerAdd, controllerGet, controllerDel, controllerMaj, controllerId, controllerSwitch } = require("./controler/CRUDControler");
const { controllerAddList, controllerGetList, controllerDelList, controllerMajList, controllerListId, } = require("./controler/LISTController");
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
app.delete('/cards', function (req, res) {
  controllerDel(req, res);
});
app.get('/cardsId', function (req, res) {
  controllerId(req, res);
});
app.patch('/cards', function (req, res) {
  controllerMaj(req, res)
});
app.patch('/cardsSwitch', function (req, res) {
  controllerSwitch(req, res)
});


//LISTE

app.post('/list', function (req, res) {
  controllerAddList(req, res);
});
app.get('/list', function (req, res) {
  controllerGetList(req, res);
});
app.get('/listId', function (req, res) {
  controllerListId(req, res);
});
app.delete('/list', function (req, res) {
  controllerDelList(req, res);
});
app.patch('/list', function (req, res) {
  controllerMajList(req, res);
})
//other

const server = app.listen(port, () => {
  logger.log(`API listening at http://localhost:${port}`)
})

module.exports = server;