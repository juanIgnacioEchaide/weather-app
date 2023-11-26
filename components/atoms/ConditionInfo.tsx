import React from 'react';
import {View, Text} from 'react-native';
import {WeatherCondition} from 'common';

export const ConditionInfo = ({data}: {data: WeatherCondition}) => {
  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
