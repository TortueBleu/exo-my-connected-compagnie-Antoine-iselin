const { response } = require("express");
const request = require("supertest");

describe("test route", () => {

    var server;
    beforeEach(() => {
        server = require('../main');
    });
    afterEach(() => {
        server.close();
    });


    test("it should test the /cards route", () => {
        return request(server)
            .get("/cards")
            .then(response => {
                expect(response.body).toEqual([])
            });
    });

    // test("it should delete a card", () => {


    //     return request(server)
    //         .post("/cards")
    //         .send({
    //             "name": "story56",
    //             "dateFin": "20/11/2021",
    //             "description": "test"
    //         })
    //         .expect(200)
    //         .then(() => {
    //             request(server)
    //                 .delete("/cardsDel?id=0")
    //                 .then(response => {
    //                     expect(response.body).toEqual({
    //                         carteId: 0,
    //                         name: "story56",
    //                         dateFin: "20/11/2021",
    //                         description: "test"
    //                     });
    //                 });
    //         });
    // });

    test("it should add a card", () => {
        return request(server)
            .post("/cards")
            .send({
                "name": "story56",
                "dateFin": "20/11/2021",
                "description": "test"
            })
            .expect(200, {
                carteId: 0,
                name: "story56",
                dateFin: "20/11/2021",
                description: "test"
            });
    });
});