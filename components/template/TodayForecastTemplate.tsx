import React from 'react';
//import {ScreenTemplate} from '../../common';
import {ScreenContainer} from '../../components';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {WeatherStats} from 'common';

const DateContainer = (): JSX.Element => {
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateTitle}>FRIDAY. DEC 7. 2023</Text>
    </View>
  );
};

const HourlyCarousel = ({hours}: {hours: WeatherStats[]}): JSX.Element => {
  return (
    <View style={styles.hourlyContainer}>
      <ScrollView>
        {hours?.map((i: WeatherStats) => (
          <View>
            <Text>{i?.condition.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const PairContainer = (): JSX.Element => {
  return (
    <View style={styles.pairContainer}>
      <View style={styles.quarterContainer}>
        <Text>CIUDAD</Text>
        <Text>NUBE</Text>
      </View>
      <View style={styles.quarterContainer}>
        <Text>20° C</Text>
        <Text>20° C</Text>
      </View>
    </View>
  );
};

export const TodayForecastTemplate = () => {
  return (
    <ScreenContainer>
      <DateContainer />
      <PairContainer />
      <PairContainer />
      <HourlyCarousel hours={[]} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  dateTitle: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 20,
    paddingTop: 15,
  },
  dateContainer: {
    margin: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'grey',
    height: '10%',
  },
  pairContainer: {
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: '37%',
  },
  quarterContainer: {
    margin: 1,
    borderColor: 'white',
  },
  hourlyContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    height: '15%',
    backgroundColor: 'grey',
  },
});
