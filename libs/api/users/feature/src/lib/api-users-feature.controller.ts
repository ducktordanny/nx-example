import {
  Body,
  Controller,
  Get,
  NotImplementedException,
  Param,
  Post,
  Put,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

import {JwtAuthGuard} from '@nx-example/api-auth-data-access';
import {
  CreateUserDto,
  ModifyUserDto,
  PasswordChangeDto,
  UsersService,
} from '@nx-example/api-users-data-access';
import {IUserResponse} from '@nx-example/shared/data-api-interfaces';

import {Request as Req} from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getAll() {
    return this.usersService.get();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  public getLoggedInUser(@Request() req: Req) {
    return req.user;
  }

  @Get(':username')
  public get(@Param('username') username: string) {
    return this.usersService.getByUsername(username);
  }

  @Post()
  public postData(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('me')
  public modifyData(@Request() req: Req, @Body() modifyUserDto: ModifyUserDto) {
    const user = req.user as IUserResponse;
    const id = user?._id;
    if (!id) throw new UnauthorizedException();
    return this.usersService.modify(id, modifyUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('me/password')
  public changePassword(@Request() req: Req, @Body() passwordChangeDto: PasswordChangeDto) {
    const user = req.user as IUserResponse;
    const username = user?.username;
    if (!username) throw new UnauthorizedException();
    return this.usersService.changePassword(username, passwordChangeDto);
  }
}
