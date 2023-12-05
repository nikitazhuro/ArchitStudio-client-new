import React from 'react';
import Input from '../../UI/Input/Input';
import { OnChangeEvent } from '../../lib/types/events';

const InputAllowNumbers: React.FC<React.InputHTMLAttributes<HTMLInputElement>> =
  ({ onChange, ...props }) => {
    const onChangeAllowNumbers = (e: OnChangeEvent) => {
      if (e.target.value.match(/^-?\d*\.?\d*$/)) {
        onChange?.(e);
      }
    };
    return <Input onChange={onChangeAllowNumbers} {...props} />;
  };

export default InputAllowNumbers;
