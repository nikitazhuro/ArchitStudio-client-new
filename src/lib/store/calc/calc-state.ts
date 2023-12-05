import { defaultFieldsValues } from "../../../pages/calc/helpers";
import { IField } from "../../../pages/calc/types";

interface IInitialState {
  calcCards: Array<string>;
  customFields: Array<IField>;
  frontFields: Array<IField>;
  windowFields: Array<IField>;
  doorFields: Array<IField>;
  friezeFields: Array<IField>;
  endFaceFields: Array<IField>;
  corniceFields: Array<IField>;
  plinthFields: Array<IField>;
}

export const initialState: IInitialState = {
  calcCards: [],
  customFields: defaultFieldsValues.customFields,
  frontFields: defaultFieldsValues.frontFields,
  windowFields: defaultFieldsValues.windowFields,
  doorFields: defaultFieldsValues.doorFields,
  friezeFields: defaultFieldsValues.friezeFields,
  endFaceFields: defaultFieldsValues.endFaceFields,
  corniceFields: defaultFieldsValues.corniceFields,
  plinthFields: defaultFieldsValues.plinthFields,
};
