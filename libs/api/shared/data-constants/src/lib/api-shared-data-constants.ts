interface DbFeatures {
  USER: string;
  POST: string;
}

export const dbFeatures: DbFeatures = {
  USER: 'User',
  POST: 'Post',
};

export const defaultLocalDbURI = 'mongodb://localhost/nx-example';
