import express from 'express'

const router = express.Router()

router.get('/healthcheck', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.STAGE
  }
  try {
    res.status(200).send(healthcheck)
  } catch (e) {
    healthcheck.message = e.message || 'Error on healthcheck'
    res.status(503).send()
  }
})

export default router
