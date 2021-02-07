import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MovieMatchScreen from '../screens/MovieMatchScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SignInScreen from '../screens/SignInScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
    return (
    <MainStack.Navigator>
        <MainStack.Screen name="SignInScreen" component={SignInScreen} />
        <MainStack.Screen name="MovieMatchScreen" component={MovieMatchScreen} />
        <MainStack.Screen name="NotFoundScreen" component={NotFoundScreen} />
    </MainStack.Navigator>
    );
}

export default MainNavigator;