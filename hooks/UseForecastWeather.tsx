import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, getForecastWeather} from '../redux';

export const UseForecastWeather = ({
  city,
  days,
}: {
  city: string;
  days: number;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const apiData = useSelector((state: RootState) => state.api.data);
  const loading = useSelector((state: RootState) => state.api.loading);
  const error = useSelector((state: RootState) => state.api.error);

  useEffect(() => {
    dispatch(getForecastWeather({city, days}));
  }, [dispatch, city, days]);

  return {loading, error, data: apiData};
};
