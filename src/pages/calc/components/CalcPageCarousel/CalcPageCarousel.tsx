import { useEffect, useMemo, useState } from 'react';
import React from 'react';

import './calcPageCarousel.css';

import CalcPageCarouselItem from './CalcPageCarouselItem';

import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector';
import { getCalcCards, useCalcPageActions } from '../../../../lib/store/calc';

const CalcPageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addCalcCard } = useCalcPageActions();
  const calcCards = useTypedSelector(getCalcCards);

  const [defaultTransform, setDefaultTransForm] = useState(20);

  const newSetCards = useMemo(() => {
    return new Set(calcCards);
  }, [calcCards.length]);

  const next = () => {
    if (currentIndex < 3) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const addCard = (field: string) => {
    if (!calcCards.includes(field)) {
      addCalcCard(field);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1440) {
      setDefaultTransForm(20);
    } else if (window.innerWidth <= 1440) {
      setDefaultTransForm(25);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='carousel_container'>
      <div className='carousel_wrapper'>
        <div
          onClick={prev}
          className={`left_arrow ${currentIndex === 0 ? 'disableArrow' : ''}`}
        >
          <span>&lt;</span>
        </div>
        <div className='carousel_content_wrapper'>
          <div
            className='carousel_content'
            style={{
              transform: `translateX(-${currentIndex * defaultTransform}%)`,
            }}
          >
            <div className='carousel_item'>
              <div className='carousel_item_content'>
                <span>Add custom element</span>
                <div
                  onClick={() => addCard('custom')}
                  className='addBtn'
                >
                  +
                </div>
              </div>
            </div>
            <CalcPageCarouselItem
              title="Front"
              addCard={() => addCard('front')}
            />
            <CalcPageCarouselItem
              title="Window"
              addCard={() => addCard('window')}
            />
            <CalcPageCarouselItem
              title="Door"
              addCard={() => addCard('door')}
            />
            <CalcPageCarouselItem
              title="Frieze"
              addCard={() => addCard('frieze')}
            />
            <CalcPageCarouselItem
              title="End face"
              addCard={() => addCard('end-face')}
            />
            <CalcPageCarouselItem
              title="Cornice"
              addCard={() => addCard('cornice')}
            />
            <CalcPageCarouselItem
              title="Plinth"
              addCard={() => addCard('plinth')}
            />
          </div>
        </div>
        <div
          onClick={next}
          className={`right_arrow ${currentIndex === 3 ? 'disableArrow' : ''}`}
        >
          <span>&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default CalcPageCarousel;
