const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Sample', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
            .post('/user')
            .send({
                "id": 2,
                "username": "isanid",
                "firstName": "isan",
                "lastName": "ri",
                "email": "isan@gmail.com",
                "password": "12345",
                "phone": "098232",
                "userStatus": 1
            })
        console.log((await response).status)
        console.log((await response).body)
    })
})
