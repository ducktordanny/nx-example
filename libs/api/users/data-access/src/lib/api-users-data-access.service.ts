import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';

import {dbFeatures} from '@nx-example/api-shared-data-constants';

import {User, UserDocument} from './api-users-data-access.schema';

import {Model} from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(dbFeatures.USER) private readonly userModel: Model<User>) {}

  public getAll(): Promise<Array<UserDocument>> {
    return this.userModel.find().select<UserDocument>('-password');
  }
}
