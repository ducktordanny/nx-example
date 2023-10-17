import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {dbFeatures} from '@nx-example/api-shared-data-constants';

import {PostSchema} from './api-posts-data-access.schema';
import {PostService} from './api-posts-data-access.service';

@Module({
  imports: [MongooseModule.forFeature([{name: dbFeatures.POST, schema: PostSchema}])],
  providers: [PostService],
  exports: [PostService],
})
export class ApiPostsDataAccessModule {}
