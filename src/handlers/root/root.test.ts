// Generated with tools/generate.js
import express from 'express'
import request from 'supertest'
import root from './root'

const app = express()
app.use('/', root)

describe('GET /root', () => {
  test('Success', async () => {
    const result = await request(app).get('/root')
    expect(result.status).toEqual(200)
  })
})
