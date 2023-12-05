export interface CreateUserDto {
  userName: string;
  email: string;
  password: string;
}
export interface LoginUserDto {
  email: string;
  password: string;
}
