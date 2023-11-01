import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';

import {AuthPayload} from '@nx-example/api-shared-interfaces-data';
import {UsersService} from '@nx-example/api-users-data-access';
import {IUserResponse} from '@nx-example/shared/data-api-interfaces';

import {ExtractJwt, Strategy} from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'this-should-not-be-specified-here',
    });
  }

  public validate(payload: AuthPayload): Promise<IUserResponse> {
    return this.usersService.getByUsername(payload.username) as Promise<IUserResponse>;
  }
}
