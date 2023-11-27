import React from 'react';
import {ForecastItem} from 'common';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export const HourlyCarousel = ({
  hours,
}: {
  hours?: ForecastItem[];
}): JSX.Element => {
  return (
    <View style={styles.hourlyContainer}>
      <ScrollView>
        <Text>{JSON.stringify(hours)}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  hourlyContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    height: '15%',
    backgroundColor: 'grey',
  },
});
