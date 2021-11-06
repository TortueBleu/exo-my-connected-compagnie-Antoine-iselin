class Card {
    constructor({ carteId, name, description, etiquettes, checklist, dateFin, dateMaj, dateCreationCarte }) {
        this.carteId = carteId;
        this.name = name;
        this.description = description;
        this.etiquettes = etiquettes;
        this.checklist = checklist;
        this.dateFin = dateFin;
        this.dateMaj = dateMaj;
        this.dateCreationCarte = dateCreationCarte;
    }
}

module.exports = {
    Card,
}