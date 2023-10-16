import {Module} from '@nestjs/common';

import {ApiAuthDataAccessModule} from '@nx-example/api-auth-data-access';

@Module({
  imports: [ApiAuthDataAccessModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiAuthFeatureModule {}
