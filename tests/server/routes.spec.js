// const { expect } = require('chai')
// const request = require('supertest')
//
// const app = require('../../server/index')
// // Use the following if we need cookies to complete any tests:
// // const agent = request.agent(app);
//
// const db = require('../../server/db')
// const { Product } = require('../../server/db/models')
//
// describe('Products Route:', () => {
//   beforeEach(() => db.sync({force: true}))
//
//   describe('GET /api/actions/1', () => {
//     it('responds with an empty array via JSON at first', () => {
//      return request(app)
//         .get('/api/actions/1')
//         .expect('Content-Type', /json/)
//         .expect((res) => {
//           expect(res.body).to.be.an.instanceOf(Array);
//           expect(res.body).to.have.length(0);
//         })
//         .expect(200)
//     })
//   })
//
// });
