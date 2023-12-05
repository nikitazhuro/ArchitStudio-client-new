import React, { useEffect, useState } from 'react';

import './loginForm.css';

import AuthInput from '../../../../components/AuthInput/AuthInput';
import Authorization from '../../../../components/Authorization/Authorization';

import { useAppDispatch } from '../../../../lib/hooks/useAppDispatch';
import {
  loginUserThunk,
  useUserSliceActions,
  getLoginError,
  getLoginSuccess,
} from '../../../../lib/store/user';
import { OnChangeEvent } from '../../../../lib/types/events';
import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector';
import { useSignInSliceActions } from '../../../../lib/store/auth';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setIsSignInOpen } = useSignInSliceActions();
  const { clearLoginState } = useUserSliceActions();

  const isLoginError = useTypedSelector(getLoginError);
  const isLoginSuccess = useTypedSelector(getLoginSuccess);

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const loginUserRequest = async () => {
    await dispatch(loginUserThunk(loginState));
  };

  const onChangeHandler = (field: string) => (e: OnChangeEvent) => {
    setLoginState((prev) => ({ ...prev, [field]: e.target.value }));
  };

  useEffect(() => {
    if (isLoginSuccess) {
      setIsSignInOpen(false);
    }
  }, [isLoginSuccess]);

  useEffect(() => {
    return () => {
      clearLoginState();
    };
  }, []);

  return (
    <div className='loginForm'>
      <div className='loginInputList'>
        <AuthInput
          value={loginState.email}
          placeholder="Email"
          className='auth_input'
          onChange={onChangeHandler('email')}
        />
        <AuthInput
          value={loginState.password}
          placeholder="Password"
          className='auth_input'
          onChange={onChangeHandler('password')}
        />
      </div>
      <Authorization submitText="Sign in" authHandler={loginUserRequest} />
    </div>
  );
};

export default LoginForm;
