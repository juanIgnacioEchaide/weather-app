import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, getForecastWeather} from '../redux';
import {createSelector} from '@reduxjs/toolkit';

const apiDataSelector = createSelector(
  (state: RootState) => state.forecast.data,
  data => data,
);

const loadingSelector = createSelector(
  (state: RootState) => state.forecast.loading,
  loading => loading,
);

const errorSelector = createSelector(
  (state: RootState) => state.forecast.error,
  error => error,
);

export const UseForecastWeather = ({
  city,
  days,
}: {
  city: string;
  days: number;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const apiData = useSelector(apiDataSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(getForecastWeather({city, days}));
  }, [dispatch, city, days]);

  return {loading, error, data: apiData};
};
