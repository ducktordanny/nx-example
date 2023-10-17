import {Controller, Get} from '@nestjs/common';

import {UsersService} from '@nx-example/api-users-data-access';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  public getData() {
    return this.userService.getAll();
  }
}
