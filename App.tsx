import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider, FavouriteIcon, CircleIcon} from 'native-base';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import MovieDetails from './src/screens/Movie-Details';
import Favourites from './src/screens/Favourites';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const getCommonOptions = (iconComponent: JSX.Element) => ({
  headerStyle: {
    backgroundColor: '#293854',
  },
  tabBarStyle: {
    backgroundColor: '#293854',
  },
  headerTitleStyle: {
    color: 'white',
  },
  tabBarIcon: ({color, size}: any) =>
    React.cloneElement(iconComponent, {color, size}),
});

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <NativeBaseProvider>
          <SafeAreaView style={{flex: 1}}>
            <Tab.Navigator initialRouteName="Home">
              <Tab.Screen
                name="Home"
                component={Home}
                options={getCommonOptions(<CircleIcon name="FavouriteIcon" />)}
              />
              <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={getCommonOptions(
                  <FavouriteIcon name="FavouriteIcon" />,
                )}
              />
              <Tab.Screen
                name="Details"
                component={MovieDetails}
                options={{
                  ...getCommonOptions(<></>),
                  tabBarItemStyle: {display: 'none'},
                }}
              />
            </Tab.Navigator>
          </SafeAreaView>
        </NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  );
}
export default App;
