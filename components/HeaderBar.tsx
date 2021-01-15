import  * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const iconSize = 40;

export default function HeaderBar() {
    return (
      <View style={styles.container}>
          <Feather name="user" size={iconSize} color="grey" />
          <AntDesign name="profile" size={iconSize} color="grey" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
});
  