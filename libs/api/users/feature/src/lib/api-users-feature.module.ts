import {Module} from '@nestjs/common';

import {ApiUsersDataAccessModule} from '@nx-example/api-users-data-access';

import {UserController} from './api-users-feature.controller';

@Module({
  imports: [ApiUsersDataAccessModule],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class ApiUsersFeatureModule {}
