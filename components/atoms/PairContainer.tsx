import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

interface PairContainerProps {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
}

export const PairContainer = ({
  leftChildren,
  rightChildren,
}: PairContainerProps): JSX.Element => {
  return (
    <View style={styles.pairContainer}>
      <View style={styles.quarterContainer}>{leftChildren}</View>
      <View style={styles.quarterContainer}>{rightChildren}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  pairContainer: {
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: '37%',
  },
  quarterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '49%',
    height: '99%',
    margin: 1,
    borderColor: 'white',
  },
});
