import { IField, IRaw } from '../types';

export const updateRaws = (raws: Array<IRaw>, rawId: number, value: string) => {
  return raws.map((raw) => (raw.id === rawId ? { ...raw, value } : raw));
};

export const updateFields = (
  fields: Array<IField>,
  fieldId: number,
  rawId: number,
  value: string,
) => {
  return fields.map((field) =>
    field.id === fieldId
      ? { ...field, raws: updateRaws(field.raws, rawId, value) }
      : field,
  );
};

export const defaultFieldsValues = {
  customFields: [
    {
      id: Date.now(),
      raws: [] as IRaw[]
    },
  ],
  frontFields: [
    {
      id: Date.now(),
      raws: [
        { id: 1, placeholder: 'Enter the length', value: '' },
        { id: 2, placeholder: 'Enter the height', value: '' },
      ],
    },
  ],
  windowFields: [
    {
      id: Date.now(),
      raws: [
        { id: 1, placeholder: 'Enter the width', value: '' },
        { id: 2, placeholder: 'Enter the height', value: '' },
        { id: 3, placeholder: 'Slope depth', value: '' },
        { id: 4, placeholder: 'Count', value: '' },
      ],
    },
  ],
  doorFields: [
    {
      id: Date.now(),
      raws: [
        { id: 1, placeholder: 'Enter the width', value: '' },
        { id: 2, placeholder: 'Enter the height', value: '' },
        { id: 3, placeholder: 'Enter the slope depth', value: '' },
        { id: 4, placeholder: 'Enter the count', value: '' },
      ],
    },
  ],
  friezeFields: [
    {
      id: Date.now(),
      raws: [
        { id: 1, placeholder: 'Enter the height of the steps', value: '' },
        { id: 2, placeholder: 'Enter the width', value: '' },
        { id: 3, placeholder: 'Enter the count', value: '' },
      ],
    },
  ],
  endFaceFields: [
    {
      id: Date.now(),
      raws: [
        { id: 1, placeholder: 'Enter the length', value: '' },
        { id: 2, placeholder: 'Enter the height', value: '' },
      ],
    },
  ],
  corniceFields: [
    {
      id: Date.now(),
      raws: [
        { id: 1, placeholder: 'Enter the length', value: '' },
        { id: 2, placeholder: 'Enter the width', value: '' },
      ],
    },
  ],
  plinthFields: [
    {
      id: Date.now(),
      raws: [
        { id: 1, placeholder: 'Enter the height #1', value: '' },
        { id: 2, placeholder: 'Enter the height #2', value: '' },
        { id: 3, placeholder: 'Enter the length', value: '' },
      ],
    },
  ],
};
