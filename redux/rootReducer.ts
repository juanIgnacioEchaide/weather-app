import {combineReducers} from 'redux';
import apiReducer from './currentWeatherSlice';
import forecastReducer from './forecastSlice';

export const rootReducer = combineReducers({
  api: apiReducer,
  forecast: forecastReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
