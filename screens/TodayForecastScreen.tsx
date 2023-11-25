import React, {useEffect, useState} from 'react';
import {TodayForecastTemplate} from '../components';
import {UseDailyCityForecast} from '../hooks';

export const TodayForecastScreen = (): JSX.Element => {
  const [cityName, setCityName] = useState<string>('');
  const {loading, error, data: apiData} = UseDailyCityForecast(cityName);

  useEffect(() => {
    setCityName('Buenos Aires');
  }, []);

  useEffect(() => {
    if (loading) {
      console.log('loading', loading);
    }
    if (error) {
      console.log('error', error);
    }
    if (apiData) {
      console.log('apiData', apiData);
    }
  }, [apiData, error, loading]);

  return <TodayForecastTemplate />;
};
