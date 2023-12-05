import React from 'react';

import './cardFooter.css';

import Button from '../../../../UI/Button/Button';
import { ICardFooter } from '../../types';

const CardFooter: React.FC<ICardFooter> = ({ addField, result }) => {
  return (
    <div className='cardFooter'>
      <div>
        <Button onClick={addField} mode="primary" size="small">
          Add field +
        </Button>
      </div>
      <div className='resultBlock'>
        <span className='resultBlock_title'>Result:</span>
        <span className='resultBlock_value'>
          {result} m<sup>2</sup>{' '}
        </span>
      </div>
    </div>
  );
};

export default CardFooter;
