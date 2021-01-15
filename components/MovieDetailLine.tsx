import  * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const iconSize = 18;
const iconColor = 'black';
export default function MovieDetailLine(props: any) {
    let icon;
    switch (props.icon) {
        case 'genre':
            icon = <MaterialCommunityIcons name="movie-edit-outline" size={iconSize} color={iconColor} />;
            break;
        case 'date':
            icon = <Fontisto name="date" size={iconSize} color={iconColor}  />;
            break;
        case 'rating':
            icon = <AntDesign name="star" size={iconSize} color={iconColor}  />;
            break;
        case 'language':
            icon = <FontAwesome name="language" size={iconSize} color={iconColor}  />;
            break;
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <Text style={styles.detailText}>  {props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        alignContent: 'center',
    },
    detailText: {
        fontSize: 14,
    },
    iconContainer: {
        justifyContent: 'center',
    },
});
  