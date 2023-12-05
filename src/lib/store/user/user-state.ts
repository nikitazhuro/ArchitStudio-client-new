import { IUser } from "../../types/user/login-user.dto";

interface IInitialState {
  user: null | IUser;
  isAuth: boolean;

  isLoginError: boolean;
  isLoginSuccess: boolean;
  isLoginLoading: boolean;

  isRegistrationError: boolean;
  isRegistrationLoading: boolean;
  isRegistrationSuccess: boolean;
}

export const initialState: IInitialState = {
  user: null,
  isAuth: false,

  isLoginLoading: false,
  isLoginSuccess: false,
  isLoginError: false,

  isRegistrationLoading: false,
  isRegistrationSuccess: false,
  isRegistrationError: false,
};
