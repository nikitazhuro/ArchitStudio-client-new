import React from 'react';

import './text.css';

type Size = 'small' | 'medium' | 'large';

interface IText {
  title: string;
  size?: Size;
  className?: string;
}

const Text: React.FC<IText> = ({ title, size = 'medium', className = '' }) => {
  return <div className={`text ${size} ${className}`}>{title}</div>;
};

export default Text;
