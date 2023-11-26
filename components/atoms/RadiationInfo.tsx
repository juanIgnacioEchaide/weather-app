import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const RadiationInfo = ({uvRadiation}: {uvRadiation: number}) => {
  return (
    <View style={styles.container}>
      <Text>{uvRadiation}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
