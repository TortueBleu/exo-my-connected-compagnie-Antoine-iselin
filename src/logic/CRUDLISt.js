const { liste } = require("../utils/list");
const tableauListes = [];
let id = 0;
const addListe = (list) => {
    const lists = new liste({ listId: id, tableau: [], ...list });
    id++;
    tableauListes.push(lists);
    return lists;
}
const getListe = () => {
    return tableauListes;
}
const getListById = (listId) => {
    let lst;
    tableauListes.forEach((liste) => {
        if (liste.listId == listId) {
            lst = liste
        }
    });
    return lst;
}


const delList = (id) => {
    const index = tableauListes.findIndex((lists) => {
        if (lists.listId == id) {
            return true;
        }
        else {
            return false;
        }
    });
    if (index == -1) {
        return undefined;
    }
    const liste = tableauListes.splice(index, 1);
    const suppresion = liste[0];
    return suppresion;
}

const majList = (list) => {
    const upList = new liste({ listId: list, ...list })
    delList(list);
    tableauListes.push(upList);
    return upList;
}

const clearListe = () => {
    tableauListes.splice(0, tableauListes.length);
}

module.exports = { addListe, getListe, delList, majList, getListById, clearListe };
