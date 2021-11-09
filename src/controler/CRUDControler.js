const { Card } = require('../utils/cards.js');
const { addToList, delCard, updateCard, getCardId, getCards } = require('../logic/CRUD');
const { getListById } = require('../logic/CRUDLISt.js');
const { switchList } = require('../logic/changementDeListe.js');

const controllerAdd = (req, res) => {
    const card = req.body;
    const listeId = req.query.listId
    const result = addToList(card, listeId);
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
    const iD = req.query.id;
    const result = updateCard(iD, req.body);
    res.json(result);
}
const controllerId = (req, res) => {
    let iD = req.query.id;
    const result = getCardById(iD);
    res.json(result);
}
const controllerSwitch = (req, res) => {
    let Carte = req.query.idCarte;
    let newListe = req.query.newList;
    let oldId = req.query.oldId;
    const oldList = getListById(oldId.listId);
    const newList = getListById(newListe.listId);
    const card = getCardId(Carte.carteId);
    const result = switchList(card.carteId, newList.listId, oldList.listId, req.body)
    res.json(result)
}


module.exports = { controllerAdd, controllerGet, controllerDel, controllerMaj, controllerId, controllerSwitch };