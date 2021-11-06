const { Card } = require("../utils/cards");

const cartes = [];
let id = 0;
const add = (carte) => {
    const card = new Card({ carteId: id, ...carte });
    id++;
    cartes.push(card);
    return card;
};
const clearTable = () => {
    cartes.splice(0, cartes.length);
}
const getCards = () => {
    return cartes;
}
const delCard = (id) => {
    const index = cartes.findIndex((carte) => {
        if (carte.carteId == id) {
            return true;
        }
        else {
            return false;
        }
    });
    if (index == -1) {
        return undefined;
    }
    const carte = cartes.splice(index, 1);

    return carte[0];
}

const updateCard = (carte) => {
    const upCard = new Card({ carteId: carte, ...carte })
    delCard(carte);
    cartes.push(upCard);
    return upCard;
}

const cardId = (carteId) => {
    let crt;
    cartes.forEach((carte) => {
        if (carte.carteId == carteId) {
            crt = carte
        }
    });
    return crt;
}
module.exports = { add, getCards, delCard, updateCard, cardId, clearTable };
