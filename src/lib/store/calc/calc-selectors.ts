import { IField } from '../../../pages/calc/types';
import { RootState } from '..';
import { get, isEmpty } from 'lodash';

export const getCalcCards = (state: RootState): Array<string | void> =>
  get(state, ['calcPageSlice', 'calcCards'], []);

export const getIsCalcCardsEmpty = (state: RootState): boolean =>
  isEmpty(get(state, ['calcPageSlice', 'calcCards'], []));

export const getCustomFields = (state: RootState): Array<IField> =>
  get(state, ['calcPageSlice', 'customFields'], []);

export const getFrontFields = (state: RootState): Array<IField> =>
  get(state, ['calcPageSlice', 'frontFields'], []);

export const getWindowFields = (state: RootState): Array<IField> =>
  get(state, ['calcPageSlice', 'windowFields'], []);

export const getDoorFields = (state: RootState): Array<IField> =>
  get(state, ['calcPageSlice', 'doorFields'], []);

export const getFriezeFields = (state: RootState): Array<IField> =>
  get(state, ['calcPageSlice', 'friezeFields'], []);

export const getEndFaceFields = (state: RootState): Array<IField> =>
  get(state, ['calcPageSlice', 'endFaceFields'], []);

export const getCorniceFields = (state: RootState): Array<IField> =>
  get(state, ['calcPageSlice', 'corniceFields'], []);

export const getPlinthFields = (state: RootState): Array<IField> =>
  get(state, ['calcPageSlice', 'plinthFields'], []);
