import express from 'express'
import cors from 'cors'
import routes from './routes'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(cors())
app.use('/', routes)
// port is now available to the Node.js runtime
// as if it were an environment variable
export const port = process.env.PORT || 8080
export default app
