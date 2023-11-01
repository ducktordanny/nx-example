import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';

import {IUserResponse} from '@nx-example/shared/data-api-interfaces';

import {AuthService} from './api-auth-data-access.service';

import {Strategy} from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  public validate(username: string, password: string): Promise<IUserResponse> {
    return this.authService.checkCredentials(username, password);
  }
}
