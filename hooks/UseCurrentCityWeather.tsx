import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, getDailyCityWeather} from '../redux';

export const UseCurrentCityWeather = (city: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const apiData = useSelector((state: RootState) => state.api.data);
  const loading = useSelector((state: RootState) => state.api.loading);
  const error = useSelector((state: RootState) => state.api.error);

  useEffect(() => {
    dispatch(getDailyCityWeather(city));
  }, [dispatch, city]);

  return {loading, error, data: apiData};
};
