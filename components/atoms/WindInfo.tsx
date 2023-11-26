import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const WindInfo = ({
  direction,
  windDegree,
  windMiles,
  windKm,
}: {
  direction: string;
  windDegree: number;
  windMiles: number;
  windKm: number;
}) => {
  return (
    <View>
      <Text style={styles.direction}>{direction}</Text>
      <Text style={styles.windDegree}>{windDegree}°</Text>
      <Text style={styles.windMiles}>{windMiles}Kph</Text>
      <Text style={styles.windKm}>{windKm}Mph</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  direction: {},
  windDegree: {},
  windMiles: {},
  windKm: {},
});
