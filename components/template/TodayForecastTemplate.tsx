import React from 'react';
import {ScreenTemplate} from '@common';
import {ScreenContainer} from '@components';
import {Text} from 'react-native';

export const TodayForecasteTemplate = ({title}: ScreenTemplate) => {
  return (
    <ScreenContainer>
      <Text>{title}</Text>
    </ScreenContainer>
  );
};
