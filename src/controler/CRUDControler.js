const { Card } = require('../utils/cards.js');
const { add, delCard, updateCard, cardId, getCards } = require('../logic/CRUD')


const controllerAdd = (req, res) => {
    const result = add(req.body);
    res.json(result);
};
const controllerGet = (req, res) => {
    const result = getCards();
    res.json(result);
}
const controllerDel = (req, res) => {
    let iD = req.query.id;
    const result = delCard(iD);
    res.send(result);
}
const controllerMaj = (req, res) => {
    const result = updateCard(req.body);
    res.json(result);
}
const controllerId = (req, res) => {
    let iD = req.query.id;
    const result = cardId(iD);
    res.json(result);
}


module.exports = { controllerAdd, controllerGet, controllerDel, controllerMaj, controllerId };