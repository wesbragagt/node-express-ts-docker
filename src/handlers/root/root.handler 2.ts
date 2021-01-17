// Generated with tools/generate.js
import express from 'express'
import { errorResponse, successResponse } from '../../common/response'

const router = express.Router()

router.get('/root', (req, res) => {
  try {
    res.send('<h1>This is an awesome Express with TypeScript Template</h1>')
  } catch (e) {
    errorResponse(res, e)
  }
})

export default router
