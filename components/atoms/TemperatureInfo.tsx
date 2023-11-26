import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const TemperatureInfo = ({
  centigrades,
  farenheit,
  pressure,
  humidity,
}: {
  centigrades: number;
  farenheit: number;
  pressure: number;
  humidity: number;
}) => {
  return (
    <View>
      <Text style={styles.centigrades}>{centigrades}°C</Text>
      <Text style={styles.farenheit}>{farenheit}°F</Text>
      <Text style={styles.pressure}>{pressure}mb</Text>
      <Text style={styles.humidity}>{humidity}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centigrades: {},
  farenheit: {},
  pressure: {},
  humidity: {},
});
