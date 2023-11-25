import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, getDailyCityForecast} from '../redux';

export const UseDailyCityForecast = (city: string) => {
  const dispatch = useDispatch();
  const apiData = useSelector((state: RootState) => state.api.data);
  const loading = useSelector((state: RootState) => state.api.loading);
  const error = useSelector((state: RootState) => state.api.error);

  useEffect(() => {
    dispatch(getDailyCityForecast(city));
  }, [dispatch, city]);

  return {loading, error, data: apiData};
};
