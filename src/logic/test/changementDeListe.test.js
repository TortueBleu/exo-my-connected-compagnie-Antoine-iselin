const { TestWatcher } = require('@jest/core')
const { switchList } = require('../changementDeListe');
const { addToList, getCards, delCard, getCardId, updateCard, clearTable } = require("../CRUD.js");
const { addListe, getListe, delList, majList, getListById, clearListe } = require('../CRUDLISt')


// describe("test switchList", () => {
//     test("ça doit supprimer une carte d'une liste et la mettre dans une autre", () => {
//         const input = {
//             carteId: 0,
//             name: "story3",
//             dateFin: "20/11/2021",
//         };
//         const list = {
//             listId: 0,
//             name: "toto",
//             tableau: []
//         };
//         const list2 = {
//             listId: 1,
//             name: "toto",
//             tableau: []
//         };
//         const liste1 = addListe(list);
//         const liste2 = addListe(list2);
//         const newCardInsideList = addToList(input, liste1.listId);
//         const result = switchList(newCardInsideList, liste2);
//         expect(result).toBe(liste2.tableau);
//     });
//         test("it should mova a card from a list and update this card", () => {
//             const input = {
//                 carteId: 0,
//                 name: "story3",
//                 dateFin: "20/11/2021",
//             };
//             const list = {
//                 listId: 0,
//                 name: "list",
//                 tableau: [],
//                 dateCrea: "06/11/21"
//             };
//             const list2 = {
//                 listId: 1,
//                 name: "list",
//                 tableau: [],
//                 dateCrea: "06/11/21"
//             };
//             const oldList = addListe(list);
//             const carte = addToList(input, list.listId);
//             const newList = addListe(list2);
//             const newCardInsideList = switchList(carte.carteId, newList.listeId, oldList.listId);
//             expect(newCardInsideList).toBe(list2.tableau);
//         })
// });