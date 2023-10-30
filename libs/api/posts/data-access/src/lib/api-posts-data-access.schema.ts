import {Prop, Schema as NestSchema, SchemaFactory} from '@nestjs/mongoose';

import {dbFeatures} from '@nx-example/api-shared-data-constants';
import {IPostResponse} from '@nx-example/shared/data-api-interfaces';

import {HydratedDocument, Types} from 'mongoose';

@NestSchema()
export class Post implements IPostResponse<Types.ObjectId> {
  @Prop({type: Types.ObjectId, ref: dbFeatures.USER})
  public userId!: Types.ObjectId;

  @Prop({type: String, required: true})
  public title!: string;

  @Prop({type: String, required: true})
  public content!: string;

  @Prop({type: Number})
  public likes!: number;

  @Prop({type: Date})
  public createdAt!: Date;
}

export type PostDocument = HydratedDocument<Post>;
export const PostSchema = SchemaFactory.createForClass(Post);
