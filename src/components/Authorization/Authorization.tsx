import React from 'react';

import './authorization.css';

import Button from '../../UI/Button/Button';
import GoogleAuthButton from '../GoogleAuthButton/GoogleAuthButton';

interface IAuthorization {
  authHandler: React.MouseEventHandler<HTMLButtonElement>;
  submitText: string;
}

const Authorization: React.FC<IAuthorization> = ({
  authHandler,
  submitText,
}) => {
  return (
    <div className='authorization'>
      <div className='auth_btn'>
        <Button size="medium" onClick={authHandler}>
          {submitText}
        </Button>
      </div>
      <div className='or_block'>Or</div>
      <div className='google_auth_block'>
        <GoogleAuthButton />
      </div>
    </div>
  );
};

export default Authorization;
