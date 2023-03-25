import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  prompt: string;

  @Prop({ required: true })
  photo: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
