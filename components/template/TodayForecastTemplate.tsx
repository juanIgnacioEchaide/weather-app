import React from 'react';

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
