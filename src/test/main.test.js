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

});