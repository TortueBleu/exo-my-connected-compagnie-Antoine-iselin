const { addListe, getListe, delList, majList, getListId, clearListe } = require('../CRUDLISt')

describe("test CRUD", () => {
    beforeEach(() => {
        clearListe();
    });

    test("it should clear a list", () => {
        addListe({ listId: 0, name: "list1" });
        addListe({ listId: 1, name: "list2" });
        addListe({ listId: 2, name: "list3" });
        addListe({ listId: 3, name: "list4" });
        const liste = getListe();
        expect(liste.length).toBe(4);
        clearListe();
        const clear = getListe();
        expect(clear.length).toBe(0);
    });

    test("it should reponse a list", () => {
        expect(getListe()).toEqual([]);
    });

    test("it should reponse a liste", () => {
        const liste = getListe();
        const input = {
            name: "list",
            tableau: "carte",
            dateCrea: "06/11/21"
        };
        const newList = addListe(input);
        expect(newList.name).toBe(input.name);
        expect(liste).toContain(newList);
    });


    test("it should change a list who already exist", () => {
        const input = {
            name: "list",
            tableau: "carte",
            dateCrea: "06/11/21"
        };
        let newList = addListe(input);
        newList.name = "clc";
        const MAJ = majList(newList);
        expect(MAJ.name).toBe("clc");
    });


    test("it should repsonse a list with id ", () => {
        const input = {
            name: "list",
            tableau: "carte",
            dateCrea: "06/11/21"
        };
        const newList = addListe(input);
        const verif = getListId(newList.listId);
        expect(verif).toBe(newList);
    });

    test("it should not delete a list who doesn't exist", () => {
        const del = delList(90);
        expect(del).toBeUndefined();
    });


    test("it should delete a list with his id", () => {
        addListe({ listId: 0, name: "list1" });
        addListe({ listId: 1, name: "list2" });
        addListe({ listId: 2, name: "list3" });
        addListe({ listId: 3, name: "list4" });
        const liste = getListe();
        const list = liste[2]
        const del = delList(list.listId);
        expect(del).toBe(list);
    });

});