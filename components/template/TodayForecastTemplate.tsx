import React from 'react';
//import {ScreenTemplate} from '../../common';
import {
  DailyContainer,
  HourlyCarousel,
  PairContainer,
  ScreenContainer,
} from '../../components';

export const TodayForecastTemplate = () => {
  return (
    <ScreenContainer>
      <DailyContainer />
      <PairContainer />
      <PairContainer />
      <HourlyCarousel hours={[]} />
    </ScreenContainer>
  );
};
