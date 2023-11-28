import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class ShortVideo {
  public _id?: string

  @prop({ required: true })
  url!: string
  @prop({ required: true })
  channel!: string
  @prop({ required: true })
  description!: string
  @prop({ required: true })
  song!: string
  @prop({ required: true })
  likes!: number
  @prop({ required: true })
  shares!: number
  @prop({ required: true })
  messages!: number
}

export const ShortVideoModel = getModelForClass(ShortVideo)
