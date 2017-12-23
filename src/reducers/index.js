import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeatehr'

const rootReducer = combineReducers({
  weather : WeatherReducer
});

export default rootReducer;
