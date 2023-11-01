import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

import {ApiUsersDataAccessModule} from '@nx-example/api-users-data-access';

import {AuthService} from './api-auth-data-access.service';
import {JwtStrategy} from './jwt.strategy';
import {LocalStrategy} from './local.strategy';

@Module({
  imports: [
    ApiUsersDataAccessModule,
    JwtModule.register({
      secret: 'this-should-not-be-specified-here',
      signOptions: {expiresIn: '60s'},
    }),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class ApiAuthDataAccessModule {}
