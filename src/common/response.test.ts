import { errorResponse, successResponse } from './response'

// mocking res
const res = () => ({
  err: '',
  errMsg: '',
  statusCode: 0,
  result: {},
  status (code) {
    this.statusCode = code
    return this
  },
  json (obj) {
    this.result = obj
    return this
  }
})

describe('errorResponse', () => {
  test('should return default error status code', () => {
    const obj = errorResponse(res())
    expect(obj.statusCode).toBe(500)
  })

  test('should return custom error status code', () => {
    const obj = errorResponse(res(), new Error('custom error'), 401)
    expect(obj.statusCode).toBe(401)
  })

  test('should return default errMsg', () => {
    const obj = errorResponse(res())
    expect(obj.result.error).toBe('invalid operation')
  })

  test('should return custom errMsg', () => {
    const err = new Error('invalid operation')
    const obj = errorResponse(res(), err)
    expect(obj.result.error).toBe(err.message)
  })
})
