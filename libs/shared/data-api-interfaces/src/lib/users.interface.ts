interface IUserBase {
  fullName: string;
  username: string;
}

export interface IUserResponse extends IUserBase {
  _id: string;
  createdAt: Date;
}

export interface IUser extends IUserBase {
  password: string;
  createdAt: Date;
}

export interface IUserReqBody extends IUserBase {
  password: string;
  passwordCheck: string;
}
