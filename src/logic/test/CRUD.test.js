
const { Card } = require("../../utils/cards.js");
const { add, getCards } = require("../CRUD.js");

describe("test CRUD", () => {

    test("it should reponse a table", () => {
        expect(getCards()).toEqual([]);
    });

    test("it should reponse a table", () => {
        const input = {
            nameCards: "story2",
            dateFin: "20/11/2021",
        };
        const carte = new Card(input);
        add(carte)
    });
});