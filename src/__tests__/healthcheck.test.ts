import express from 'express'
import request from 'supertest'
import healthcheck from '../routes/healthcheck'

const app = express()
app.use('/',healthcheck)

describe('GET /healthcheck', () => {
  test('Success', async () => {
    const result = await request(app).get('/healthcheck')
    expect(result.body.message).toEqual('OK')
    expect(result.status).toEqual(200)
  })
})
