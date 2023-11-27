import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const RadiationInfo = ({
  uvRadiation,
  feelslikeCentigrades,
  precipitations,
  visibilityKm,
}: {
  uvRadiation: number;
  feelslikeCentigrades: number;
  precipitations: number;
  visibilityKm: number;
}) => {
  return (
    <View style={styles.container}>
      <Text>UV {uvRadiation}</Text>
      <Text>{feelslikeCentigrades} °C</Text>
      <Text>{precipitations} mm</Text>
      <Text>{visibilityKm} Km</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
