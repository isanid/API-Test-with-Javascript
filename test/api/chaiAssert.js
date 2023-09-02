// expect = sebuah metode untuk menambahkan assertion
const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
// kalo tidak memakai function harus ditambah .js dibelakang nama file
const DATA = require('../../data/userData.js')

describe('Post Request Example', () => {
    const response = request(baseUrl())
        .post('/user')
        .send(DATA.CREATE_USER_DATA)

    it('response status equal to 200', async () => {
        // check response harus sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        // expect dalam body response terdapat value message
        expect((await response).body).to.haveOwnProperty('message')
    })

    // reporting in mochawesome


})