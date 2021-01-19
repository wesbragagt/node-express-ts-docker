module.exports = handlerName => ({
  content: `// Generated with tools/generate.js
import express from 'express'
import request from 'supertest'
import ${handlerName} from './${handlerName}.handler'

const app = express()
app.use('/', ${handlerName})

describe('GET /${handlerName}', () => {
  test('Success', async () => {
    const result = await request(app).get('/${handlerName}')
    expect(result.body.success).toEqual(true)
    expect(result.status).toEqual(200)
  })
})
  `,
  extension: '.test.ts'
})
