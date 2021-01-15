import  * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';

import CircleButton from './CircleButton';


export default function ButtonActions(props: any) {
    return (
        <View style={styles.container}>
            <CircleButton size='large' icon='close' />
            <CircleButton size='small' icon='star' />
            <CircleButton size='large' icon='heart' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
   
});
  