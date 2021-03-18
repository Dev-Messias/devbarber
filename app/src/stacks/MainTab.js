import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home/index';
import Search from '../screens/Search/index';
import Appointments from '../screens/Appointments/index';
import Favorites from '../screens/Favorites/index';
import Profile from '../screens/Profile/index';

const tab = createBottomTabNavigator();

export default () => (
  <tab.Navigator tabBar={props=><CustomTabBar {...props} />} >
    <tab.Screen name="Home" component={Home} />
    <tab.Screen name="Search" component={Search} />
    <tab.Screen name="Appointments" component={Appointments} />
    <tab.Screen name="Favorites" component={Favorites} />
    <tab.Screen name="Profile" component={Profile} />
  </tab.Navigator>
);