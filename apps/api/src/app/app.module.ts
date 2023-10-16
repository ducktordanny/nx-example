import {Module} from '@nestjs/common';

import {ApiAuthFeatureModule} from '@nx-example/api-auth-feature';
import {ApiPostsFeatureModule} from '@nx-example/api-posts-feature';
import {ApiUsersFeatureModule} from '@nx-example/api-users-feature';

import {AppController} from './app.controller';

@Module({
  imports: [ApiAuthFeatureModule, ApiPostsFeatureModule, ApiUsersFeatureModule],
  controllers: [AppController],
})
export class AppModule {}
