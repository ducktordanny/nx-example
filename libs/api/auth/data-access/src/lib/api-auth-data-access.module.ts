import {Module} from '@nestjs/common';

import {ApiUsersDataAccessModule} from '@nx-example/api-users-data-access';

@Module({
  imports: [ApiUsersDataAccessModule],
  providers: [],
  exports: [],
})
export class ApiAuthDataAccessModule {}
