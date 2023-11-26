import React from 'react';
import {formatDateTitle} from '../../common';
import {View, Text, StyleSheet} from 'react-native';

export const DailyContainer = ({date}: {date: string}): JSX.Element => {
  return (
    <View style={styles.dailyContainer}>
      <Text style={styles.dailyTitle}>{formatDateTitle(date)}</Text>
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
