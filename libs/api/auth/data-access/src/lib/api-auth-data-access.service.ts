import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';

import {AuthPayload} from '@nx-example/api-shared-interfaces-data';
import {UsersService} from '@nx-example/api-users-data-access';
import {AuthResponse, IUserResponse} from '@nx-example/shared/data-api-interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async checkCredentials(username: string, password: string): Promise<IUserResponse> {
    return this.usersService.checkCredentials(username, password);
  }

  public login(user: IUserResponse): AuthResponse {
    const payload = {username: user.username, sub: user._id} as AuthPayload;
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
