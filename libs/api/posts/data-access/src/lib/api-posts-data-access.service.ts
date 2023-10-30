import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';

import {dbFeatures} from '@nx-example/api-shared-data-constants';
import {ApiServiceModel} from '@nx-example/api-shared-interfaces-data';
import {IPostReqBody} from '@nx-example/shared/data-api-interfaces';

import {PostDto} from './api-posts-data-access.dto';
import {Post, PostDocument} from './api-posts-data-access.schema';

import {FilterQuery, Model, Types} from 'mongoose';

@Injectable()
export class PostService implements ApiServiceModel<PostDocument, PostDto> {
  constructor(@InjectModel(dbFeatures.POST) private readonly postModel: Model<Post>) {}

  public async get(id: string): Promise<PostDocument> {
    const post = await this.postModel.findById(id);
    if (!post) throw new NotFoundException('post cannot be found');
    return post;
  }

  public async create(dto: PostDto, userId: string): Promise<void> {
    const data: Post = {
      ...(dto as IPostReqBody),
      userId: new Types.ObjectId(userId),
      likes: 0,
      createdAt: new Date(),
    };
    const post = new this.postModel(data);
    await post.save();
  }

  public async modify(id: string, dto: PostDto): Promise<void> {
    await this.postModel.updateOne({_id: id}, {...dto});
  }

  public async remove(id: string): Promise<void> {
    await this.postModel.deleteOne({_id: id});
  }

  public async like(id: string): Promise<void> {
    const post = await this.postModel.findById(id);
    if (!post) throw new NotFoundException('post cannot be found');
    const likes = (post.likes || 0) + 1;
    await this.postModel.updateOne({_id: id}, {likes});
  }

  public getSome(limit?: number, from?: string, username?: string): Promise<Array<PostDocument>> {
    const query: FilterQuery<Post> = {};
    if (from) query['_id'] = {$gt: from};
    if (username) query['username'] = username;
    return this.postModel.find(query).limit(limit || Infinity);
  }
}
