// Generated with tools/generate.js
import express from 'express'
import request from 'supertest'
import healthcheck from './healthcheck'

const app = express()
app.use('/', healthcheck)

describe('GET /healthcheck', () => {
  test('Success', async () => {
    const result = await request(app).get('/healthcheck')
    expect(result.body.data.message).toEqual('OK')
    expect(result.body.success).toEqual(true)
    expect(result.status).toEqual(200)
  })
})
