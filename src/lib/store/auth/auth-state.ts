interface IInitialState {
  defaultState: string;
  isSignInOpen: boolean;
}

export const initialState: IInitialState = {
  isSignInOpen: false,
  defaultState: 'login',
};
