import {Controller, ImATeapotException, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

import {AuthService} from '@nx-example/api-auth-data-access';
import {IUserResponse} from '@nx-example/shared/data-api-interfaces';

import {Request as Req} from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public login(@Request() req: Req) {
    if (!req.user) throw new ImATeapotException();
    return this.authService.login(req.user as IUserResponse);
  }
}
