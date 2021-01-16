import app from '../app'
import request from 'supertest'

describe('GET / - a simple api endpoint', () => {
  test('API testing example', async () => {
    const result = await request(app).get('/test')
    expect(result.body.apiWorking).toEqual(true)
    expect(result.status).toEqual(200)
  })
})
