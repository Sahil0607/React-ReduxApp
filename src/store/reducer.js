import { combineReducers } from "redux";
import CounterReducer from "./Reducers/counter";
import ResultReducer from "./Reducers/result";
import RandomAgeReducer from './Reducers/rendomAge';

export default combineReducers({
    CounterReducer,
    ResultReducer,
    RandomAgeReducer
  })
