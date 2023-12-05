import { useMemo } from 'react';
import React from 'react';

import './calcPageCards.css';

import FrontAreaCard from './FrontAreaCard/FrontAreaCard';
import WindowAreaCard from './WindowAreaCard/WindowAreaCard';
import DoorAreaCard from './DoorAreaCard/DoorAreaCard';
import FriezeAreaCard from './FriezeAreaCard/FriezeAreaCard';
import EndFaceAreaCard from './EndFaceAreaCard/EndFaceAreaCard';
import CorniceAreaCard from './CorniceAreaCard/CorniceAreaCard';
import PlinthAreaCard from './PlinthAreaCard/PlinthAreaCard';
import CustomCard from './CustomCard/CustomCard';

import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector';
import { getCalcCards } from '../../../../lib/store/calc';

const CalcPageCards = () => {
  const cards = useTypedSelector(getCalcCards);

  const newSetCards = useMemo(() => {
    return new Set(cards);
  }, [cards.length]);

  return (
    <div className='calcPageCards'>
      {newSetCards.has('custom') && <CustomCard className='cardItem' />}
      {newSetCards.has('front') && (
        <FrontAreaCard className='cardItem' />
      )}
      {newSetCards.has('window') && (
        <WindowAreaCard className='cardItem' />
      )}
      {newSetCards.has('door') && <DoorAreaCard className='cardItem' />}
      {newSetCards.has('frieze') && (
        <FriezeAreaCard className='cardItem' />
      )}
      {newSetCards.has('end-face') && (
        <EndFaceAreaCard className='cardItem' />
      )}
      {newSetCards.has('cornice') && (
        <CorniceAreaCard className='cardItem' />
      )}
      {newSetCards.has('plinth') && (
        <PlinthAreaCard className='cardItem' />
      )}
    </div>
  );
};

export default CalcPageCards;
