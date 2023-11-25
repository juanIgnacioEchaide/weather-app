import React, {useEffect, useState} from 'react';
import {TodayForecastTemplate} from '../components';
import {UseCurrentCityWeather} from '../hooks';

export const TodayForecastScreen = (): JSX.Element => {
  const [cityName, setCityName] = useState<string>('');
  const {loading, error, data: apiData} = UseCurrentCityWeather(cityName);

  useEffect(() => {
    setCityName('Buenos Aires');
  }, []);

  useEffect(() => {
    if (loading) {
      console.log('UseCurrentCityWeather loading', loading);
    }
    if (error) {
      console.log(' UseCurrentCityWeather error', error);
    }
    if (apiData) {
      console.log('UseCurrentCityWeather apiData', apiData);
    }
  }, [apiData, error, loading]);

  return <TodayForecastTemplate />;
};
