import {Body, Controller, Get, NotImplementedException, Param, Post, Put} from '@nestjs/common';

import {
  CreateUserDto,
  ModifyUserDto,
  PasswordChangeDto,
  UsersService,
} from '@nx-example/api-users-data-access';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getAll() {
    return this.usersService.get();
  }

  @Get('me')
  public getLoggedInUser() {
    // return this.usersService.getByUsername(username);
    throw new NotImplementedException('will be implemented after having auth');
  }

  @Get(':username')
  public get(@Param('username') username: string) {
    return this.usersService.getByUsername(username);
  }

  @Post()
  public postData(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put('me')
  public modifyData(@Body() modifyUserDto: ModifyUserDto) {
    // return this.usersService.modify(id, modifyUserDto);
    throw new NotImplementedException('will be implemented after having auth');
  }

  @Put('me/password')
  public changePassword(@Body() passwordChangeDto: PasswordChangeDto) {
    // return this.usersService.changePassword(username, passwordChangeDto);
    throw new NotImplementedException('will be implemented after having auth');
  }
}
