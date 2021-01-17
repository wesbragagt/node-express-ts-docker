import express from 'express'
import { errorResponse, successResponse } from '../common/response'

const router = express.Router()

router.get('/healthcheck', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.STAGE
  }
  try {
    successResponse(res, healthcheck)
  } catch (e) {
    errorResponse(res, e)
  }
})

export default router
