import React from 'react';
import {WeatherStats} from 'common';
import {ScrollView, StyleSheet, View} from 'react-native';
import {HourStats} from './HourStats';

export const HourlyCarousel = ({
  hours,
}: {
  hours: WeatherStats[];
}): JSX.Element => {
  return (
    <View style={styles.hourlyContainer}>
      <ScrollView>
        {hours?.map((i: WeatherStats) => (
          <HourStats
            condition={i.condition}
            timeEpoch={0}
            time={''}
            tempC={0}
            tempF={0}
            isDay={0}
            windMph={0}
            windKph={0}
            windDegree={0}
            windDir={''}
            pressureMb={0}
            pressureIn={0}
            precipMm={0}
            precipIn={0}
            humidity={0}
            cloud={0}
            feelsLikeC={0}
            feelsLikeF={0}
            windchillC={0}
            windchillF={0}
            heatindexC={0}
            heatindexF={0}
            dewpointC={0}
            dewpointF={0}
            willItRain={0}
            chanceOfRain={0}
            willItSnow={0}
            chanceOfSnow={0}
            visKm={0}
            visMiles={0}
            gustMph={0}
            gustKph={0}
            uv={0}
          />
        ))}
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
