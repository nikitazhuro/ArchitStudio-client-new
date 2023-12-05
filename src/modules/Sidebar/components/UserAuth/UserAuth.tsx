import React from 'react';

import './userAuth.css';

import Button from '../../../../UI/Button/Button';

import { useSignInSliceActions } from '../../../../lib/store/auth';

const UserAuth = () => {
  const { setIsSignInOpen, setDefaultState } = useSignInSliceActions();

  const signUp = () => {
    setIsSignInOpen(true);
    setDefaultState('signUp');
  };

  const signIn = () => {
    setIsSignInOpen(true);
    setDefaultState('signIn');
  };

  return (
    <div className='login'>
      <Button
        className='signup'
        onClick={signUp}

        size="small"
      >
        Sign up
      </Button>
      <Button size="small" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default UserAuth;
