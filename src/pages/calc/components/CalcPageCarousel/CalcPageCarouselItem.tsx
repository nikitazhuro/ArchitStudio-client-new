import React from 'react';

interface ICalcPageCarouselItem {
  title: string;
  addCard: () => void;
}

const CalcPageCarouselItem: React.FC<ICalcPageCarouselItem> = ({
  addCard,
  title,
}) => {
  return (
    <div className='carousel_item'>
      <div className='carousel_item_content'>
        <span>{title}</span>
        <div onClick={addCard} className='addBtn'>
          +
        </div>
      </div>
    </div>
  );
};

export default CalcPageCarouselItem;
