import { get } from 'lodash';

import { RootState } from '../index';

export const getIsSignInOpen = (state: RootState) =>
  get(state, ['signIn', 'isSignInOpen'], false);

export const getSignInDefaultState = (state: RootState) =>
  get(state, ['signIn', 'defaultState'], 'signIn');
