import React from 'react';

import './input.css';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input className='input' {...props} />;
};

export default Input;
