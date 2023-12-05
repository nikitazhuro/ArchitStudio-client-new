import React from 'react';
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

import LoadingScreen from '../LoadingScreen/LoadingScreen';

import { useAuthCheckMutation } from '../../lib/store/api/userApi';
import { useUserSliceActions } from '../../lib/store/user';
interface Props {
  children?: React.ReactNode;
}

const AuthCheck = ({ children }: Props) => {
  const { setUser, clearUser } = useUserSliceActions();

  const [authCheckFetch, { data: checkIsComplete }] = useAuthCheckMutation();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (checkIsComplete) {
      const access_token = localStorage.getItem('access_token');

      if (access_token) {
        setUser(jwtDecode(access_token));
      } else {
        clearUser();
      }

      setIsReady(true);
    }
  }, [checkIsComplete]);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      authCheckFetch();
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return <LoadingScreen />;

  return children;
};

export default AuthCheck;
