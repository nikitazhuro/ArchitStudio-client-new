export interface IRaw {
  id: number;
  placeholder: string;
  value: string;
}

export interface IField {
  id: number;
  raws: Array<IRaw>;
}

export interface ICalcCard {
  id: string;
  title: string;
  fields: Array<IField>;
}

export interface ICalcPageCardItem {
  card: ICalcCard;
}

export interface ICardFooter {
  addField: () => void;
  result: string;
}

export interface ICorniceAreaCard {
  className: string;
}

export interface IDoorAreaCard {
  className: string;
}

export interface IEndFaceAreaCard {
  className: string;
}

export interface IFriezeAreaCard {
  className: string;
}

export interface IFrontAreaCard {
  className: string;
}

export interface ICustomCard {
  className: string;
}

export interface IPlinthAreaCard {
  className: string;
}

export interface IWindowAreaCard {
  className: string;
}
