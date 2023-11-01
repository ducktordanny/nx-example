import {Module} from '@nestjs/common';

import {ApiAuthDataAccessModule} from '@nx-example/api-auth-data-access';

import {AuthController} from './api-auth-feature.controller';

@Module({
  imports: [ApiAuthDataAccessModule],
  controllers: [AuthController],
  providers: [],
  exports: [],
})
export class ApiAuthFeatureModule {}
