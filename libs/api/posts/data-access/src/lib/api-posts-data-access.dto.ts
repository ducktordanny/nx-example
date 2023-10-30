import {IPostReqBody} from '@nx-example/shared/data-api-interfaces';

import {IsNotEmpty, IsString, MaxLength} from 'class-validator';

export class PostDto implements IPostReqBody {
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  public title!: string;

  @IsNotEmpty()
  @IsString()
  public content!: string;
}
