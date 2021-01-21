import  * as React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const iconSize = 40;

export default function HeaderBar({navigation}) {
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate('NotFoundScreen')}
        >
          <Feather name="user" size={iconSize} color="grey" />
        </Pressable>
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
  