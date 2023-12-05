export interface LoginUserDto {
  email: string;
  password: string;
}

export interface ILoginedUserDto {
  access_token: string;
}

export interface IUser {
  uuid: string;
  userName: string;
  email: string;
}
