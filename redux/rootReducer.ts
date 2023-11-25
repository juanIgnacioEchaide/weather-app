// rootReducer.ts
import {combineReducers} from '@reduxjs/toolkit';
import apiReducer from './currentWeatherSlice';

export const rootReducer = combineReducers({
  api: apiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
