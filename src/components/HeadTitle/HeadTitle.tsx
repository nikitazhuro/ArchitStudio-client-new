import React from 'react'
import './headTitle.css';

interface IHeadTitle {
  title: string;
  className?: string;
}

const HeadTitle: React.FC<IHeadTitle> = ({ title, className = '' }) => {
  return <div className={`headTitle ${className}`}>{title}</div>;
};

export default HeadTitle;
