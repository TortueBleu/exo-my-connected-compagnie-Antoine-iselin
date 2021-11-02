const { Card } = require('../utils/cards.js');
const { add, getCards } = require('../logic/CRUD')


const controllerAdd = (req, res) => {
    const newCarte = new Card(req.body);
    const result = add(newCarte);
    res.json(result);
};
const controllerGet = (req, res) => {
    const result = getCards();
    res.json(result);
}
module.exports = { controllerAdd, controllerGet };