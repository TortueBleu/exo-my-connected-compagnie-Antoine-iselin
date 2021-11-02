const request = require("supertest");

describe("test a empty table", () => {

    var server;
    beforeEach(() => {
        server = require('../main');
    });
    afterEach(() => {
        server.close();
    });

    // test("it should test the /cards route", () => {
    //     return request(server)
    //         .post("/cards")
    //         .then(response => {
    //             expect(response.statusCode).toBe(200)
    //             expect(response.body).toEqual([{}])
    //         });
    // });
    test("it should test the /cards route", () => {
        return request(server)
            .get("/cards")
            .then(response => {
                expect(response.body).toEqual([])
            });
    });
});