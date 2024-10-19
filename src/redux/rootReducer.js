import { combineReducers } from 'redux';
import tipCalculatorReducer from './reducer';

const rootReducer = combineReducers({
  tipCalculator: tipCalculatorReducer,
});

export default rootReducer;