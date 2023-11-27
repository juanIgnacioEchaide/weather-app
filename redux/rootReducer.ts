import {combineReducers} from 'redux';
import apiReducer from './currentWeatherSlice';
import forecastReducer from './forecastSlice';

export const rootReducer = combineReducers({
  current: apiReducer,
  forecast: forecastReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
