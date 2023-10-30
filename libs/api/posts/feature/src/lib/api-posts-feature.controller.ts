import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';

import {PostDto, PostService} from '@nx-example/api-posts-data-access';

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

  @Post()
  public postData(@Body() postDto: PostDto) {
    // TODO: this should only be available for logged in users & replace hardcoded id
    return this.postService.create(postDto, '6532ac693d4b05bfc3e08eb3');
  }

  @Put()
  public modifyData(@Body() postDto: PostDto) {
    // TODO: this should only be available for logged in users & only modify their own posts
    return this.postService.modify('653d4a539999fe47810ec1cb', postDto);
  }

  @Post('like/:id')
  public likePost(@Param('id') id: string) {
    return this.postService.like(id);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    // TODO: this should only be available for logged in users & only remove their own posts
    return this.postService.remove(id);
  }
}
