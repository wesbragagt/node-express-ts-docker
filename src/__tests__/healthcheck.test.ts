import express from 'express'
import request from 'supertest'
import healthcheck from '../routes/healthcheck'

// Need to instantiate another express instance in order to inject the route
// require.context does not work with test suite
const app = express()
app.use('/', healthcheck)

describe('GET /healthcheck', () => {
  test('Success', async () => {
    const result = await request(app).get('/healthcheck')
    expect(result.body.message).toEqual('OK')
    expect(result.status).toEqual(200)
  })
})
