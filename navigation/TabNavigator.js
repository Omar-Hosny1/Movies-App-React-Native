import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Feather';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MoviesScreen from './screens/MoviesScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {backgroundColor: '#001C30'},
            tabBarInactiveTintColor: '#301934' ,   // grey
            tabBarActiveTintColor: '#F0A04B',      //orange
        }}>
            <Tab.Screen name="HomeT" component={HomeScreen} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="home" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name="ProfileT" component={ProfileScreen} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="person" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name="MovieT" component={MoviesScreen} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="caret-forward-circle" color={color} size={size}/>
                )
            }}/>
            {/* <Tab.Screen name="FavoriteT" component={FavoriteScreen} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="heart" color={color} size={size}/>
                )
            }}/> */}
        </Tab.Navigator>
    );
    

}

export default TabNavigator;