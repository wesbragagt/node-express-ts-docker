module.exports = routeName => `import express from 'express'
import request from 'supertest'
import ${routeName} from '../routes/${routeName}'

const app = express()
app.use('/', ${routeName})

describe('GET /${routeName}', () => {
  test('Success', async () => {
    const result = await request(app).get('/${routeName}')
    expect(result.body.data.message).toEqual('OK')
    expect(result.status).toEqual(200)
  })
})
`
