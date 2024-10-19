import { SET_BILL_AMOUNT, SET_TIP_PERCENTAGE, SET_NUMBER_OF_PEOPLE } from './constants';

const initialState = {
  billAmount: '',
  tipPercentage: 15,
  numberOfPeople: 1,
};

const tipCalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BILL_AMOUNT:
      return { ...state, billAmount: action.payload };
    case SET_TIP_PERCENTAGE:
      return { ...state, tipPercentage: action.payload };
    case SET_NUMBER_OF_PEOPLE:
      return { ...state, numberOfPeople: action.payload };
    default:
      return state;
  }
};

export default tipCalculatorReducer;