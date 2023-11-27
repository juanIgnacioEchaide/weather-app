import React from 'react';
import {Forecast} from 'common';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export const HourlyCarousel = ({hours}: {hours?: Forecast}): JSX.Element => {
  return (
    <View style={styles.hourlyContainer}>
      <ScrollView>
        <Text>{JSON.stringify(hours?.forecastday[0])}</Text>
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
