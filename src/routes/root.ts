import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(
    '<h1>Welcome to this awesome nodeJS, Typescript and Express template</h1>'
  )
})

export default router
