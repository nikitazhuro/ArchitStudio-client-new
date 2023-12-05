import React from 'react';

import './googleAuthButton.css';
import GoogleIcon from '../../lib/assets/google_auth.svg';

import Button from '../../UI/Button/Button';

interface IGoogleAuthButton
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const GoogleAuthButton: React.FC<IGoogleAuthButton> = (props) => {
  return (
    <Button
      size="small"
      className='googleAuthButton'
      mode="secondary"
      {...props}
    >
      <GoogleIcon />
    </Button>
  );
};

export default GoogleAuthButton;
