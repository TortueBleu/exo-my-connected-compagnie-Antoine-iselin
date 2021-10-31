const express = require('express')
require('dotenv').config({path: '.env'})
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const logger = require('./utils/logger')
const {Cartes} = require('./utils/cards.js')

const app = express()
const port = process.env.HTTP_PORT
const test = process.env.route

// Middleware
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

let cartes = []
let id = 0
// insert your router here
app.get('/', function(req, res) {
  res.send(test);
});

app.post('/cards', function(req, res) {
  const newCarte = new Cartes(req.body.name, req.body.description, req.body.etiquettes, req.body.checklist, req.body.dateFin, req.body.dateMaj, req.body.creationCarte)
  req.body.carteId = id
  id = id + 1 
  cartes.push(newCarte)
  res.send(`carte initialiser avec ${req.body.carteId} pour id`);
  });


app.get('/cardsId', function(req, res) {
  res.send('bienvenu pour les Id');
});

app.delete('/cardsDel', function(req, res) {
  res.send('bienvenu pour les suppresions');
});

app.patch('/cardsUptade', function(req, res) {
  res.send('bienvenu pour les maj');
});

//other

app.listen(port, () => {
    logger.log(`API listening at http://localhost:${port}`)
})
  