// Generated with tools/generate.js
import express from 'express'
import { errorResponse, successResponse } from '../../common/response'

const router = express.Router()

router.get('/healthcheck', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.STAGE
  }
  try {
    successResponse(res, data)
  } catch (e) {
    errorResponse(res, e)
  }
})

export default router
