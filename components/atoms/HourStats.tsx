import React from 'react';
import {WeatherStats} from 'common';
import {StyleSheet, View} from 'react-native';

export const HourStats = ({condition}: WeatherStats) => {
  return <View style={styles.container}>{condition.text}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
  },
});
