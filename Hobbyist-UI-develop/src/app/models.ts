export interface UserModel {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
  __v?: number;
}

export interface AuthModel {
  authenticated: boolean;
  user?: UserModel;
}

export interface ArticleModel {
  _id?: string;
  title?: string;
  image?: string;
  description?: string;
  status?: string;
  owner?: string;
  __v?: number;
}

export interface QueryParamsType {
  [name: string]: string | string[];
}
