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
import {WeatherData} from 'common';

export const TodayForecastTemplate = ({data}: {data: WeatherData}) => {
  return (
    <ScreenContainer>
      <DailyContainer date={data?.current?.last_updated} />
      <PairContainer
        rightChildren={
          <ConditionInfo
            conditionIcon={data?.current?.condition?.icon}
            locationCity={data?.location?.name}
            locationCountry={data?.location?.country}
          />
        }
        leftChildren={
          <TemperatureInfo
            centigrades={data?.current?.temp_c}
            farenheit={data?.current?.temp_f}
            humidity={data?.current?.humidity}
            pressure={data?.current?.pressure_mb}
            key={data?.current?.last_updated}
          />
        }
      />
      <PairContainer
        leftChildren={
          <WindInfo
            direction={data?.current?.wind_dir}
            windDegree={data?.current?.wind_degree}
            windMiles={data?.current?.wind_mph}
            windKm={data?.current?.wind_kph}
          />
        }
        rightChildren={
          <RadiationInfo
            uvRadiation={data?.current?.uv}
            feelslikeCentigrades={data?.current?.feelslike_c}
            precipitations={data?.current?.precip_mm}
            visibilityKm={data?.current?.vis_km}
          />
        }
      />
      <HourlyCarousel hours={[]} />
    </ScreenContainer>
  );
};
