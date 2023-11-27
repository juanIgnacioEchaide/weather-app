import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, getDailyCityWeather} from '../redux';
import {createSelector} from '@reduxjs/toolkit';

const apiDataSelector = createSelector(
  (state: RootState) => state.current.data,
  data => data,
);

const loadingSelector = createSelector(
  (state: RootState) => state.current.loading,
  loading => loading,
);

const errorSelector = createSelector(
  (state: RootState) => state.current.error,
  error => error,
);

export const UseCurrentCityWeather = (city: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const apiData = useSelector(apiDataSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(getDailyCityWeather(city));
  }, [dispatch, city]);

  return {loading, error, data: apiData};
};
