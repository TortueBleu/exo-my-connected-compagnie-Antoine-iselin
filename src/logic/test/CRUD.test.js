//const { response } = require("express");
//const { get } = require("superagent");
//const { Card } = require("../../utils/cards.js");
const { createTestScheduler } = require("@jest/core");
const { clear } = require("winston");
const { add, addToList, getCards, delCard, getCardId, listCardId, updateCard, clearTable } = require("../CRUD.js");
const { addListe } = require("../CRUDLISt.js");


describe("test CRUD", () => {
    beforeEach(() => {
        clearTable();
    });

    test("it should clear the table", () => {
        add({ carteId: 0, name: "cart1", dateFin: "04/11/21" });
        add({ carteId: 1, name: "cart2", dateFin: "04/11/21" });
        add({ carteId: 2, name: "cart3", dateFin: "04/11/21" });
        add({ carteId: 3, name: "cart4", dateFin: "04/11/21" });
        const liste = getCards();
        expect(liste.length).toBe(4);
        clearTable();
        const clear = getCards();
        expect(clear.length).toBe(0);
    });

    test("it should reponse a table", () => {
        expect(getCards()).toEqual([]);
    });

    test("it should reponse a table", () => {
        const liste = getCards();
        const input = {
            name: "story2",
            dateFin: "20/11/2021",
        };
        const newCard = add(input);
        expect(newCard.name).toBe(input.name);
        expect(liste).toContain(newCard);
    });


    test("it should change a card who already exist", () => {
        const input = {
            name: "story3",
            dateFin: "20/11/2021",
        };
        const newCard = add(input);
        newCard.name = "clc";
        const MAJ = updateCard(newCard);
        expect(MAJ.name).toBe("clc");
    });


    test("it should response a card inside a list", () => {
        const input = {
            name: "story3",
            dateFin: "20/11/2021",
        };
        const list = {
            name: "toto",
            tableau: []
        }
        const verif = addListe(list);
        const newCardInsideList = addToList(input, verif.listId);
        expect(verif.tableau).toContain(newCardInsideList);
    });

    test("it should add a card into an non-existing list", () => {
        const card = {
            name: "story3",
            dateFin: "20/11/2021",
        };
        const newCardInsideList = addToList(card);
        expect(newCardInsideList).toBeUndefined();
    });


    test("it should repsonse a card with id ", () => {
        const input = {
            name: "story3",
            dateFin: "20/11/2021",
        };
        const newCard = add(input);
        const verif = getCardId(newCard.carteId);
        expect(verif).toBe(newCard);
    });

    test("it should not delete a card who doesn't exist", () => {
        const del = delCard(90);
        expect(del).toBeUndefined();
    });


    test("it should delete a card with his id", () => {
        add({ carteId: 0, name: "cart1", dateFin: "04/11/21" });
        add({ carteId: 1, name: "cart2", dateFin: "04/11/21" });
        add({ carteId: 2, name: "cart3", dateFin: "04/11/21" });
        add({ carteId: 3, name: "cart4", dateFin: "04/11/21" });
        const liste = getCards();
        const card = liste[2]
        const del = delCard(card.carteId);
        expect(del).toBe(card);
    });



});