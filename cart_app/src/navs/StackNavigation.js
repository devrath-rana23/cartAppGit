// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../scenes/SplashScreen';
import CourseslistScreen from '../scenes/CourseslistScreen';
import CartitemsScreen from '../scenes/CartitemsScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Splash">
            <Stack.Screen name="Courseslist" component={CourseslistScreen} />
            <Stack.Screen name="Cartitems" component={CartitemsScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigation;