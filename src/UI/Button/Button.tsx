import React from 'react'

import { IButton } from '../../lib/types/ui/button';

import './button.css';

const Button: React.FC<IButton> = ({
  children,
  className = '',
  size = '',
  mode = 'primary',
  ...props
}) => {
  return (
    <button type="button" className={`button ${mode} ${size} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
