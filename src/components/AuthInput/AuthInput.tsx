import React from 'react';
import Input from '../../UI/Input/Input';

import './AuthInput.css';

const AuthInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = '',
  ...props
}) => {
  return <Input className={`AuthInput ${className}`} type="text" {...props} />;
};

export default AuthInput;
