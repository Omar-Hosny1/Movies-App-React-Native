import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ProfileScreen = () => {
  return (
    // <NavigationContainer>{
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.centered}>
          <Text style={styles.title}>The Start</Text>
        </View>
      </SafeAreaView>
    // }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0A04B',
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: '#301934',
  },
});
export default ProfileScreen;


// #252B48 dark blue
// #001C30 black blue
// #F0A04B orange
// #F29727 orange
// #FFB84C orange
// #FFD65E orange
// #FFECDB orange
// #FD8D14 orange
