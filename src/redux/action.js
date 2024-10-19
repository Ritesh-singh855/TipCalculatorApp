import { SET_BILL_AMOUNT, SET_TIP_PERCENTAGE, SET_NUMBER_OF_PEOPLE } from './constants';

export const setBillAmount = (amount) => ({
  type: SET_BILL_AMOUNT,
  payload: amount,
});

export const setTipPercentage = (percentage) => ({
  type: SET_TIP_PERCENTAGE,
  payload: percentage,
});

export const setNumberOfPeople = (number) => ({
  type: SET_NUMBER_OF_PEOPLE,
  payload: number,
});