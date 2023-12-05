import { useEffect, useMemo, useRef, useState } from 'react';
import React from 'react';

import './windowAreaCard.css';

import Cross from '../../../../../lib/assets/cross.svg';
import InputAllowNumbers from '../../../../../components/InputValidation/InputAllowNumbers';
import CardFooter from '../CardFooter';

import { useCalcPageActions, getWindowFields } from '../../../../../lib/store/calc';
import { useTypedSelector } from '../../../../../lib/hooks/useTypedSelector';
import { defaultFieldsValues, updateFields } from '../../../helpers';
import { IField, IWindowAreaCard } from '../../../types';

const WindowAreaCard: React.FC<IWindowAreaCard> = ({ className }) => {
  const windowFields = useTypedSelector(getWindowFields);
  const { addWindowFields, removeCalcCard } = useCalcPageActions();

  const [fields, setFields] = useState(windowFields);

  const fieldsRef = useRef<Array<IField>>([]);

  const addField = () => {
    setFields((prev) => [
      ...prev,
      { ...defaultFieldsValues.windowFields[0], id: Date.now() },
    ]);
  };

  const remoteField = (id: number) => {
    setFields((prev) => [...prev.filter((field) => field.id !== id)]);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rawId: number,
    fieldId: number,
  ) => {
    setFields((prev) => {
      return updateFields(prev, fieldId, rawId, event.target.value);
    });
  };

  const removeCard = () => {
    fieldsRef.current = defaultFieldsValues.windowFields;

    removeCalcCard('window');
  };

  const result = useMemo(() => {
    return fields
      .reduce((a, b) => a + +b.raws.reduce((c, d) => c + (+d.value || 0), 0), 0)
      .toFixed(2);
  }, [fields]);

  useEffect(() => {
    fieldsRef.current = fields;
  }, [fields]);

  useEffect(
    () => () => {
      addWindowFields(fieldsRef.current);
    },
    [],
  );

  return (
    <div className={`cardItemWrapper ${className}`}>
      <div className='cardItemHeader'>
        <h5>Calculation of the window area:</h5>
        <div onClick={removeCard} className='removeRaw'>
          <Cross />
        </div>
      </div>
      <div className='cardItemContent'>
        {fields.map((field, ind) => (
          <div key={field.id} className='field'>
            {ind + 1}.
            <div className='raws'>
              {field.raws.map((raw) => (
                <div key={raw.id} className='raw'>
                  <InputAllowNumbers
                    placeholder={raw.placeholder}
                    value={raw.value}
                    onChange={(e) => onChange(e, raw.id, field.id)}
                  />
                </div>
              ))}
            </div>
            {fields.length > 1 && (
              <div
                onClick={() => remoteField(field.id)}
                className='removeRaw'
              >
                <Cross />
              </div>
            )}
          </div>
        ))}
      </div>
      <CardFooter addField={addField} result={result} />
    </div>
  );
};
export default WindowAreaCard;
