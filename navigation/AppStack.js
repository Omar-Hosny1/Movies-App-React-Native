import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const Stack = () =>{
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#001C30',
            // drawerActiveTintColor: '',
            // drawerInactiveTintColor: '',
            drawerLabelStyle: {
                fontSize: 18,
                color: 'white',
                marginLeft: -25,
                fontFamily: 'Roboto-Medium'
            },
        }}>
            <Drawer.Screen
            name='Home'
            component={TabNavigator}
            options={{
                drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" size={22} color={color}/>
                ),
            }}
            />
            <Drawer.Screen
            name='Profile'
            component={TabNavigator}
            options={{
                drawerIcon: ({color}) => (
                    <Ionicons name="profile-outline" size={22} color={color}/>
                ),
            }}
            />
            <Drawer.Screen
            name='Movie'
            component={TabNavigator}
            options={{
                drawerIcon: ({color}) => (
                    <Ionicons name="start-outline" size={22} color={color}/>
                ),
            }}
            />
        </Drawer.Navigator>
    );
}
export default Stack;