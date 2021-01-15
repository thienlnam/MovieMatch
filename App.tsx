import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MovieMatch from './screens/MovieMatchScreen';

export default function App() {
    return (
        <SafeAreaProvider>
          <StatusBar />
          <MovieMatch />
        </SafeAreaProvider>
    );
}
