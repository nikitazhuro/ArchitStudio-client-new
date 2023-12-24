import React, { useState } from 'react';

import './calcPageRoot.css';

import ArrowTop from '../../../lib/assets/arrow-top1.svg';

import CalcPageHeader from './CalcPageHeader/CalcPageHeader';
import CalcPageCarousel from './CalcPageCarousel/CalcPageCarousel';
import CalcPageCards from './CalcPageCards/CalcPageCards';

import { useTypedSelector } from '../../../lib/hooks/useTypedSelector';
import { getIsCalcCardsEmpty } from '../../../lib/store/calc/calc-selectors';

const CalcPageRoot = () => {
  const isCardsEmpty = useTypedSelector(getIsCalcCardsEmpty);

  const [hiddenOptions, setHiddenOptions] = useState(false);

  return (
    <div className='calcPageRoot'>
      <div
        className={`calcPageOptions ${hiddenOptions ? 'hiddenOptions' : ''}`}
      >
        <div className='qwe'>
          <CalcPageHeader />
          <CalcPageCarousel />
        </div>
      </div>
      <div
        className={`calcPageCardsRoot ${hiddenOptions ? 'full_screen_cards' : ''}`}
      >
        {!isCardsEmpty && (
          <div className='menu'>
            <div
              className={`full_screen_icon ${hiddenOptions ? 'full_screen_icon_active' : ''}`}
              onClick={() => setHiddenOptions((prev) => !prev)}
            >
              <ArrowTop />
            </div>
          </div>
        )}
        <CalcPageCards />
      </div>
    </div>
  );
};

export default CalcPageRoot;
