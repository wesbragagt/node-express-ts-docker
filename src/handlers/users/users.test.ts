// Generated with tools/generate.js
import express from 'express'
import request from 'supertest'
import users from './users.handler'

const app = express()
app.use('/', users)

describe('GET /users', () => {
  test('Success', async () => {
    const result = await request(app).get('/users')
    expect(result.body.success).toEqual(true)
    expect(result.status).toEqual(200)
  })
})
