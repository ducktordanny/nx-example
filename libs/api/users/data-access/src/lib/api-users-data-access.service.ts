import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';

import {dbFeatures} from '@nx-example/api-shared-data-constants';
import {ApiServiceModel} from '@nx-example/api-shared-interfaces-data';
import {IUserResponse} from '@nx-example/shared/data-api-interfaces';

import {CreateUserDto, ModifyUserDto, PasswordChangeDto} from './api-users-data-access.dto';
import {User, UserDocument} from './api-users-data-access.schema';

import {compare, hash} from 'bcrypt';
import {Model} from 'mongoose';

@Injectable()
export class UsersService implements ApiServiceModel<UserDocument, CreateUserDto, ModifyUserDto> {
  constructor(@InjectModel(dbFeatures.USER) private readonly userModel: Model<User>) {}

  public async get(id?: string): Promise<UserDocument | Array<UserDocument>> {
    const user = await (id
      ? this.userModel.findById(id)
      : this.userModel.find()
    ).select<UserDocument>('-password');
    if (!user) throw new NotFoundException('user cannot be found');
    return user;
  }

  public async getByUsername(
    username: string,
    handleError = true,
  ): Promise<UserDocument | IUserResponse | null> {
    const user = await this.userModel.findOne({username}).select<UserDocument>('-password');
    if (!user && !handleError) return null;
    if (!user) throw new NotFoundException('user cannot be found');
    return user;
  }

  public async create(createUserDto: CreateUserDto): Promise<void> {
    const {fullName, password: plainPw, username} = createUserDto;
    const password = await hash(plainPw, 10);
    const userDocument: User = {
      fullName,
      username,
      password,
      createdAt: new Date(),
    };
    const user = new this.userModel(userDocument);
    await user.save().catch(this.handleDuplicateUsername);
  }

  public async modify(id: string, modifyUserDto: ModifyUserDto): Promise<void> {
    await this.userModel
      .updateOne({_id: id}, {...modifyUserDto})
      .catch(this.handleDuplicateUsername);
  }

  public async changePassword(
    username: string,
    passwordChangeDto: PasswordChangeDto,
  ): Promise<void> {
    await this.checkCredentials(username, passwordChangeDto.currentPassword);
    const password = await hash(passwordChangeDto.password, 10);
    await this.userModel.updateOne({username}, {password});
  }

  public async checkCredentials(username: string, password: string): Promise<IUserResponse> {
    const response = await this.userModel.findOne({username});
    if (!response) throw new NotFoundException('invalid credentials');
    const userObject = response.toObject();
    const {password: passwordHash, ...user} = userObject;
    const result = await compare(password, passwordHash);
    if (!result) throw new ForbiddenException('invalid credentials');
    return {...user, _id: user._id.toString()} as IUserResponse;
  }

  private handleDuplicateUsername(err: any): void {
    if (err?.name === 'MongoServerError' && err?.code === 11000)
      throw new ForbiddenException('username is already in use');
    throw new InternalServerErrorException(err?.message);
  }
}
