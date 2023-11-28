import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { shortVideoRouter } from './routers/shortVideoRouter'

dotenv.config()

mongoose.set('strictQuery', true)

const MONGODB_URI = process.env.MONGODB_URI

mongoose
  .connect(MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB!')
  })
  .catch(() => {
    console.log('Error MongoDB')
  })

const app = express()

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/posts', shortVideoRouter)

const PORT: number = parseInt(process.env.PORT! as string, 10)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
