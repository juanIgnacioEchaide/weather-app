import React, {useEffect, useState} from 'react';
import {TodayForecastTemplate} from '../components';
import {UseCurrentCityWeather, UseForecastWeather} from '../hooks';

export const TodayForecastScreen = (): JSX.Element => {
  const [cityName, setCityName] = useState<string>('');
  const {
    loading: loadingCurrent,
    error: errorCurrent,
    data: currentWeatherData,
  } = UseCurrentCityWeather(cityName);

  const {
    loading: loadingForecast,
    error: errorForecast,
    data: forecastData,
  } = UseForecastWeather({city: cityName, days: 10});

  useEffect(() => {
    setCityName('Buenos Aires');
  }, []);

  useEffect(() => {
    if (loadingCurrent) {
      console.log('UseForecastWeather loading', loadingForecast);
    }
    if (errorCurrent) {
      console.log(' UseForecastWeather error', errorForecast);
    }
    if (currentWeatherData) {
      console.log('UseForecastWeather apiData', forecastData);
    }
  }, [
    currentWeatherData,
    errorCurrent,
    errorForecast,
    forecastData,
    loadingCurrent,
    loadingForecast,
  ]);

  return (
    <TodayForecastTemplate
      currentData={currentWeatherData}
      forecastData={forecastData}
    />
  );
};
