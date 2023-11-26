import React from 'react';

import {
  DailyContainer,
  HourlyCarousel,
  PairContainer,
  ScreenContainer,
  ConditionInfo,
  TemperatureInfo,
  WindInfo,
} from '../../components';
import {WeatherData} from 'common';

export const TodayForecastTemplate = ({data}: {data: WeatherData}) => {
  return (
    <ScreenContainer>
      <DailyContainer date={data?.current?.last_updated} />
      <PairContainer
        rightChildren={<ConditionInfo data={data?.current?.condition} />}
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
        rightChildren={<ConditionInfo data={data?.current?.condition} />}
      />
      <HourlyCarousel hours={[]} />
    </ScreenContainer>
  );
};
