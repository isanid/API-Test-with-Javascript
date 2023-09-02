

const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Sample', () => {
    it('Find Pets by Status', async () => {
        // await pada request artinya menunggu permintaan selesai baru stelah itu mencetak status & body response
        const response = request(baseUrl())
            .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)


        // const response = request('https://petstore.swagger.io/v2')
        // .get('/store/inventory')
        // console.log((await response).status)
        // console.log((await response).body)
    })
})