import React, { useEffect } from 'react';
import { Col, Row } from 'antd';

import './signInContent.css';

import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm';
import AuthMode from './AuthMode/AuthMode';
import LeftContent from './LeftContect/LeftContent';

import { useTypedSelector } from '../../../lib/hooks/useTypedSelector';
import { getSignInDefaultState } from '../../../lib/store/auth';

const SignInContent = () => {
  const view = useTypedSelector(getSignInDefaultState);

  useEffect(() => {
    console.log('mount');
  }, []);

  return (
    <Row className='signInContent'>
      <LeftContent />
      <Col className='signInContent_content'>
        <div className='registrationTitle'>
          <h3>{view === 'signIn' ? 'Sign in' : 'Sign up'}</h3>
        </div>
        <AuthMode />
        {view === 'signIn' && <LoginForm />}
        {view === 'signUp' && <RegistrationForm />}
      </Col>
    </Row>
  );
};

export default SignInContent;
