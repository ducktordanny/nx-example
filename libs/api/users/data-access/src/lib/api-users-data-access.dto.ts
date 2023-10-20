import {Match} from '@nx-example/api-shared-custom-validators-util';
import {IUserReqBody} from '@nx-example/shared/data-api-interfaces';

import {IsNotEmpty, Length} from 'class-validator';

export class CreateUserDto implements IUserReqBody {
  @IsNotEmpty()
  public fullName!: string;

  @IsNotEmpty()
  @Length(3, 32)
  public username!: string;

  @IsNotEmpty()
  @Length(8)
  public password!: string;

  @IsNotEmpty()
  @Match<CreateUserDto>('password')
  public passwordCheck!: string;
}

export class ModifyUserDto {
  @IsNotEmpty()
  fullName!: string;

  @IsNotEmpty()
  @Length(3, 32)
  username!: string;
}

export class PasswordChangeDto {
  @IsNotEmpty()
  currentPassword!: string;

  @IsNotEmpty()
  @Length(8)
  password!: string;

  @IsNotEmpty()
  @Match<PasswordChangeDto>('password')
  passwordCheck!: string;
}
