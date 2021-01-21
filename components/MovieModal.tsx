import  * as React from 'react';
import { StyleSheet, ImageBackground, useWindowDimensions, SafeAreaView, ScrollView, Pressable, View, Text } from 'react-native';
import Modal from 'react-native-modal';

import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import MovieDetailLine from './MovieDetailLine';
import ButtonActions from './ButtonActions';


export default function MovieModal(props: any) {
    const deviceWidth = useWindowDimensions().width;
    const deviceHeight = useWindowDimensions().height;
    const image = {uri: props.image};
    return (
        <Modal 
            isVisible={props.isVisible}
            style={styles.modal}
        >
        <SafeAreaView style={styles.innerModal}>
            <View style={{zIndex: 1}}>
                <ImageBackground
                    source={image}
                    resizeMode='contain'
                    style={{width: deviceWidth, height: deviceHeight/2.5}}
                >
               
                <Pressable onPress={props.hideModal} style={styles.closeIconContainer}>
                    <AntDesign name="circledown" size={50} color="red" />
                </Pressable>
                </ImageBackground>
            </View>
            <View style={styles.movieDetailsContainer}>
                <Text style={styles.movieTitle}>{props.title}</Text>
                <MovieDetailLine icon="rating" text={props.rating} />
                <MovieDetailLine icon="genre" text={props.genres} />
                <MovieDetailLine icon="date" text={props.dateReleased} />
                <MovieDetailLine icon="language" text={props.language} />
                <View
                    style={styles.horizontalLine}
                />
                <ScrollView style={styles.overviewContainer}>
                    <Text style={styles.overviewText}>{props.description}</Text>
                </ScrollView>
            </View>
            <View style={styles.actionButtonContainer}>
                <ButtonActions />
            </View>
        </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
    },
    movieDetailsContainer: {
        flex: 1,
        padding: 12,
    },
    modal: {
        margin: 0,
    },
    innerModal: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    movieTitle: {
        fontSize: 22,
        fontWeight: "700",
    },
    overviewContainer: {
        flex: 1,
        paddingTop: 10,
    },
    overviewText: {
        fontSize: 18,
    },
    horizontalLine: {
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    actionButtonContainer: {
        justifyContent: 'flex-end',
    },
    closeIconContainer: {
        width: 50,
        height: 75,
        borderRadius: 30,
        backgroundColor: 'white',
        position: 'absolute',
        color: 'red',
        bottom: -50,
        right: 25,
    },
    closeIcon: {
    
    },
});
  