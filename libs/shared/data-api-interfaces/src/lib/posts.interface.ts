export interface IPostReqBody {
  title: string;
  content: string;
}

export interface IPostResponse<IdType = string> extends IPostReqBody {
  userId: IdType;
  likes: number;
  createdAt: Date;
}
