import {Prop, Schema as NestSchema, SchemaFactory} from '@nestjs/mongoose';

import {dbFeatures} from '@nx-example/api-shared-data-constants';

import {HydratedDocument, Schema} from 'mongoose';

@NestSchema()
export class Post {
  @Prop({type: Schema.Types.ObjectId, ref: dbFeatures.USER})
  public userId!: Schema.Types.ObjectId;

  @Prop({type: String, required: true})
  public title!: string;

  @Prop({type: String, required: true})
  public content!: string;

  @Prop({type: Number, default: 0})
  public likes!: number;

  @Prop({type: Date})
  public createdAd!: Date;
}

export type PostDocument = HydratedDocument<Post>;
export const PostSchema = SchemaFactory.createForClass(Post);
