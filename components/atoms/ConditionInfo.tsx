import React from 'react';
import {View, Text} from 'react-native';

export const ConditionInfo = ({
  conditionIcon,
  locationCity,
  locationCountry,
}: {
  locationCity: string;
  locationCountry: string;
  conditionIcon: string;
}) => {
  return (
    <View>
      <Text>{locationCity}</Text>
      <Text>{locationCountry}</Text>
      <Text>{conditionIcon}</Text>
    </View>
  );
};
