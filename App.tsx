import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import MovieDetails from './src/screens/Movie-Details';
import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        {/* <MovieDetails /> */}
        <Home />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
export default App;
