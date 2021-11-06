const { liste } = require("../utils/list");
const { getCardId, delCard, updateCard } = require("./CRUD");
const { getListById } = require('./CRUDLISt')

const switchList = (carteId, listeId, oldId, req) => {
    //recupere carte et liste    
    const oldList = getListById(oldId);
    const card = getCardId(carteId);
    const list = getListById(listeId);


    //supprime carte de la liste
    const patchedCard = delCard(card.carteId);
    //console.log(patchedCard);
    //uptdate carte
    const newCard = updateCard(req.body);
    console.log(newCard);
    oldList.tableau.splice(carteId, 1)
    //rejoute carte dans la nouvelle liste

    list.tableau.push(newCard);
    return newCard;
}
module.exports = { switchList };