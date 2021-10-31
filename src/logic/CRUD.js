const cartes = [];
//let id = 0;
const add = (carte) => {
    cartes.push(carte);
    return cartes;
};
const getCards = () => {
    return cartes;
}


module.exports = { add, getCards };