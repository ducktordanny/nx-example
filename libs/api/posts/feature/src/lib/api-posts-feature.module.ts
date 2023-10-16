import {Module} from '@nestjs/common';

import {ApiPostsDataAccessModule} from '@nx-example/api-posts-data-access';

@Module({
  imports: [ApiPostsDataAccessModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiPostsFeatureModule {}
