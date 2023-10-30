import {Module} from '@nestjs/common';

import {ApiPostsDataAccessModule} from '@nx-example/api-posts-data-access';

import {PostsController} from './api-posts-feature.controller';

@Module({
  imports: [ApiPostsDataAccessModule],
  controllers: [PostsController],
  providers: [],
  exports: [],
})
export class ApiPostsFeatureModule {}
