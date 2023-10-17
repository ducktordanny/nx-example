import {Prop, Schema as NestSchema, SchemaFactory} from '@nestjs/mongoose';

import {HydratedDocument} from 'mongoose';

@NestSchema()
export class User {
  @Prop({type: String, required: true})
  public fullName!: string;

  @Prop({type: String, required: true, unique: true})
  public username!: string;

  @Prop({types: String})
  public password?: string;

  @Prop({type: Date, default: Date.now()})
  public createdAt!: Date;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
