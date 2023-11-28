import express, { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import { ShortVideoModel } from '../models/shortVideoModel'

export const shortVideoRouter = express.Router()

shortVideoRouter.post(
  '/new',
  expressAsyncHandler(async (req: Request, res: Response) => {
    try {
      const newPost = new ShortVideoModel(req.body)
      await newPost.save()
      res.status(201).send(newPost)
    } catch (error) {
      res.status(400).json(error)
    }
  })
)

shortVideoRouter.get(
  '/all',
  expressAsyncHandler(async (req: Request, res: Response) => {
    try {
      const posts = await ShortVideoModel.find()
      res.status(200).send(posts)
    } catch (error) {
      res.status(400).json(error)
    }
  })
)
