import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

import {JwtAuthGuard} from '@nx-example/api-auth-data-access';
import {PostDto, PostService} from '@nx-example/api-posts-data-access';
import {IUserResponse} from '@nx-example/shared/data-api-interfaces';

import {Request as Req} from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Get()
  public getSome(@Query('limit') limit?: number, @Query('from') from?: string) {
    return this.postService.getSome(limit, from);
  }

  @Get(':id')
  public get(@Param('id') id: string) {
    return this.postService.get(id);
  }

  @Get('user/:username')
  public getSomeByUsername(
    @Param('username') username: string,
    @Query('limit') limit?: number,
    @Query('from') from?: string,
  ) {
    return this.postService.getSome(limit, from, username);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public postData(@Request() req: Req, @Body() postDto: PostDto) {
    const user = req.user as IUserResponse;
    const id = user?._id;
    if (!id) throw new UnauthorizedException();
    return this.postService.create(postDto, id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  public modifyData(@Request() req: Req, @Body() postDto: PostDto) {
    const user = req.user as IUserResponse;
    const id = user?._id;
    if (!id) throw new UnauthorizedException();
    return this.postService.modify(id, postDto);
  }

  @Post('like/:id')
  public likePost(@Param('id') id: string) {
    return this.postService.like(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
