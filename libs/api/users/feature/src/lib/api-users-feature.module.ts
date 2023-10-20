import {Module} from '@nestjs/common';

import {ApiUsersDataAccessModule} from '@nx-example/api-users-data-access';

import {UsersController} from './api-users-feature.controller';

@Module({
  imports: [ApiUsersDataAccessModule],
  controllers: [UsersController],
  providers: [],
  exports: [],
})
export class ApiUsersFeatureModule {}
