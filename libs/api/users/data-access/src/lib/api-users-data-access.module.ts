import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {dbFeatures} from '@nx-example/api-shared-data-constants';

import {UserSchema} from './api-users-data-access.schema';
import {UsersService} from './api-users-data-access.service';

@Module({
  imports: [MongooseModule.forFeature([{name: dbFeatures.USER, schema: UserSchema}])],
  providers: [UsersService],
  exports: [UsersService],
})
export class ApiUsersDataAccessModule {}
