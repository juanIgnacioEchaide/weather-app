import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DailyContainer = (): JSX.Element => {
  return (
    <View style={styles.dailyContainer}>
      <Text style={styles.dailyTitle}>FRIDAY. DEC 7. 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dailyContainer: {
    margin: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'grey',
    height: '10%',
  },
  dailyTitle: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 20,
    paddingTop: 15,
  },
});
