import  * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Colors from '../constants/Colors';

import { AntDesign } from '@expo/vector-icons';


export default function ButtonActions(props: any) {
    let icon;
    let size;
    let containerWidth;
    switch (props.size) {
        case 'large':
            size = 36;
            containerWidth = 75;
            break;
        case 'small':
            size = 22;
            containerWidth = 60;
            break;
        default:
            containerWidth = 75;
            size = 36;
    }

    switch (props.icon) {
        case 'close':
            icon = <AntDesign name="close" size={size} color="red" />
            break;
        case 'heart':
            icon = <AntDesign name="heart" size={size} color="green" />
            break;
        case 'star':
            icon = <AntDesign name="star" size={size} color="blue" />
    }
    return (
        <View>
            <TouchableOpacity onPress={props.onPressFunc}>
            <View style={{width: containerWidth, ...styles.iconContainer}}>
                {icon}
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        marginHorizontal: 10,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderColor: '#F0F0F0', 
        borderWidth: 1, 
        borderRadius: 45, 
        padding: 15,
        justifyContent: 'center',
        shadowColor: '#F0F0F0',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
   
});
