const { addListe, getListe, delList, majList, getListById, } = require('../logic/CRUDLISt')

const controllerAddList = (req, res) => {
    const result = addListe(req.body);
    res.json(result);
};
const controllerGetList = (req, res) => {
    const result = getListe();
    res.json(result);
};
const controllerDelList = (req, res) => {
    const iD = req.query.id;
    const result = delList(iD);
    res.send(result);
}
const controllerListId = (req, res) => {
    let iD = req.query.id;
    const result = getListById(iD);
    res.json(result);
}

const controllerMajList = (req, res) => {
    const iD = req.query.id;
    const result = majList(iD, req.body);
    res.json(result);
}
module.exports = { controllerAddList, controllerGetList, controllerDelList, controllerMajList, controllerListId };