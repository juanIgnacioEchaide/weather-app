import React from 'react';

import {
  DailyContainer,
  HourlyCarousel,
  PairContainer,
  ScreenContainer,
  ConditionInfo,
  TemperatureInfo,
  WindInfo,
  RadiationInfo,
} from '../../components';
import {Forecast, WeatherData} from 'common';

export const TodayForecastTemplate = ({
  currentData,
  forecastData,
}: {
  currentData: WeatherData;
  forecastData: Forecast;
}) => {
  return (
    <ScreenContainer>
      <DailyContainer date={currentData?.current?.last_updated} />
      <PairContainer
        rightChildren={
          <ConditionInfo
            conditionIcon={currentData?.current?.condition?.icon}
            locationCity={currentData?.location?.name}
            locationCountry={currentData?.location?.country}
          />
        }
        leftChildren={
          <TemperatureInfo
            centigrades={currentData?.current?.temp_c}
            farenheit={currentData?.current?.temp_f}
            humidity={currentData?.current?.humidity}
            pressure={currentData?.current?.pressure_mb}
            key={currentData?.current?.last_updated}
          />
        }
      />
      <PairContainer
        leftChildren={
          <WindInfo
            direction={currentData?.current?.wind_dir}
            windDegree={currentData?.current?.wind_degree}
            windMiles={currentData?.current?.wind_mph}
            windKm={currentData?.current?.wind_kph}
          />
        }
        rightChildren={
          <RadiationInfo
            uvRadiation={currentData?.current?.uv}
            feelslikeCentigrades={currentData?.current?.feelslike_c}
            precipitations={currentData?.current?.precip_mm}
            visibilityKm={currentData?.current?.vis_km}
          />
        }
      />
      <HourlyCarousel hours={forecastData} />
    </ScreenContainer>
  );
};
