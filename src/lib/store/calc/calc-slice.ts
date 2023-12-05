import { bindActionCreators, createSlice } from '@reduxjs/toolkit';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { defaultFieldsValues } from '../../../pages/calc/helpers';

import { initialState } from './calc-state';

export const calcPageSlice = createSlice({
  name: 'calcPageSlice',
  initialState,
  reducers: {
    addCalcCard: (state, action) => {
      state.calcCards = [...state.calcCards, action.payload];
    },
    removeCalcCard: (state, action) => {
      state.calcCards = [
        ...state.calcCards.filter((card) => card !== action.payload),
      ];
    },

    addCustomFields: (state, action) => {
      state.customFields = action.payload;
    },
    clearCustomFields: (state) => {
      state.customFields = defaultFieldsValues.customFields;
    },

    addFrontFields: (state, action) => {
      state.frontFields = action.payload;
    },
    clearFrontFields: (state) => {
      state.frontFields = defaultFieldsValues.frontFields;
    },

    addWindowFields: (state, action) => {
      state.windowFields = action.payload;
    },
    clearWindowFields: (state) => {
      state.windowFields = defaultFieldsValues.windowFields;
    },

    addDoorFields: (state, action) => {
      state.doorFields = action.payload;
    },
    clearDoorFields: (state) => {
      state.doorFields = defaultFieldsValues.doorFields;
    },

    addFriezeFields: (state, action) => {
      state.friezeFields = action.payload;
    },
    clearFriezeFields: (state) => {
      state.friezeFields = defaultFieldsValues.friezeFields;
    },

    addEndFaceFields: (state, action) => {
      state.endFaceFields = action.payload;
    },
    clearEndFaceFields: (state) => {
      state.endFaceFields = defaultFieldsValues.endFaceFields;
    },

    addCorniceFields: (state, action) => {
      state.corniceFields = action.payload;
    },
    clearCorniceFields: (state) => {
      state.corniceFields = defaultFieldsValues.corniceFields;
    },

    addPlinthFields: (state, action) => {
      state.plinthFields = action.payload;
    },
    clearPlinthFields: (state) => {
      state.plinthFields = defaultFieldsValues.plinthFields;
    },
  },
});

export const useCalcPageActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(calcPageSlice.actions, dispatch);
};
