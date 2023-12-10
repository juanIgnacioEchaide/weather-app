import React from 'react';
import {Forecast} from 'common';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const HourlyCarousel = ({hours}: {hours?: Forecast}): JSX.Element => {
  const renderHourlyItem = ({item}: {item: any}) => {
    const handlePress = () => {
      // Functionality to be executed onPress
      console.log('Pressed:', item.date); // Example: Logging the pressed item's date
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.hourlyItem}>
          <Text>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={hours?.forecastday || []}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: any, index: number) => `${item.date}_${index}`}
      renderItem={renderHourlyItem}
      contentContainerStyle={styles.hourlyContainer}
    />
  );
};

const styles = StyleSheet.create({
  hourlyContainer: {
    backgroundColor: 'grey',
    paddingVertical: 10,
  },
  hourlyItem: {
    width: 100, // Set your desired width here
    height: 100, // Set your desired height here
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
});
