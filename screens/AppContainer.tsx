import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../navigation/MainNavigator';

const AppContainer = () => {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    );
}

export default AppContainer;