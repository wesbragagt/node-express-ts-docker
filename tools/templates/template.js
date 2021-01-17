module.exports = routeName => `import express from 'express'
import { errorResponse, successResponse } from '../common/response'

const router = express.Router()

router.get('/${routeName}', (req, res) => {
  const ${routeName} = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.STAGE
  }
  try {
    successResponse(res, ${routeName})
  } catch (e) {
    errorResponse(res, e)
  }
})

export default router`
