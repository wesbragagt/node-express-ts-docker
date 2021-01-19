import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { importHandlers } from './lib/importHandlers'
const routes = importHandlers(
  require.context('./handlers', true, /\.handler\.ts$/)
)

dotenv.config()
const app = express()

app.use(cors())
app.use('/', routes)
// port is now available to the Node.js runtime
// as if it were an environment variable
export const port = process.env.PORT || 8080
export default app
