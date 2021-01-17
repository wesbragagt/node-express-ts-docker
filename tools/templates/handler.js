module.exports = handlerName => ({
  content: `// Generated with tools/generate.js
import express from 'express'
import { errorResponse, successResponse } from '../../common/response'
  
const router = express.Router()
  
router.get('/${handlerName.toLowerCase()}', (req, res) => {
  const data = [{name: 'dataset here'}]
  try {
    successResponse(res, data)
  } catch (e) {
    errorResponse(res, e)
  }
})

export default router`,
  extension: '.handler.ts'
})
