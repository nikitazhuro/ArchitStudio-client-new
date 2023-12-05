import { Col } from 'antd';
import React from 'react';

import './authMode.css';

import Button from '../../../../UI/Button/Button';

import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector';
import { getSignInDefaultState, useSignInSliceActions } from '../../../../lib/store/auth';

const AuthMode = () => {
  const view = useTypedSelector(getSignInDefaultState);
  const { setDefaultState } = useSignInSliceActions();

  return (
    <Col className='registrationOptions'>
      <Col className='registrationOptionsContent'>
        <Button
          className={`option ${view === 'signUp' ? 'option_active' : ''}`}
          mode="option"
          onClick={() => setDefaultState('signUp')}
        >
          Sign up
        </Button>
        <Button
          className={`option ${view === 'signIn' ? 'option_active' : ''}`}
          mode="option"
          onClick={() => setDefaultState('signIn')}
        >
          Sign in
        </Button>
      </Col>
    </Col>
  );
};

export default AuthMode;
