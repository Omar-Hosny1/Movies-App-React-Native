import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.centered}>
        <Text style={styles.title}>Greeting Team 1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
});
export default App;
