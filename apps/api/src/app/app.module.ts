import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {ApiAuthFeatureModule} from '@nx-example/api-auth-feature';
import {ApiPostsFeatureModule} from '@nx-example/api-posts-feature';
import {ApiUsersFeatureModule} from '@nx-example/api-users-feature';

import {AppController} from './app.controller';

@Module({
  imports: [
    ApiAuthFeatureModule,
    ApiPostsFeatureModule,
    ApiUsersFeatureModule,
    MongooseModule.forRoot('mongodb://localhost/nx-example'),
  ],
  controllers: [AppController],
})
export class AppModule {}
