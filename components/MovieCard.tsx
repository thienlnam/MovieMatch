import React, {useState} from 'react';
import { StyleSheet, useWindowDimensions, Image, Pressable, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import MovieModal from '../components/MovieModal';
import Colors from '../constants/Colors';

const image = {uri: "https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg"};

export default function MovieCard(props: any) {
    const imageWidth = useWindowDimensions().width - 12;
    const imageHeight = useWindowDimensions().height - 280;

    const [isModalVisible, setModalVisibility] = useState(false);
    const image = {uri: props.image};

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Pressable onPress={() => setModalVisibility(true)}>
            <Image 
                source={image}
                style={{borderRadius: 8, width: imageWidth, height: 480, transform: [{scale: 1}]}}
            />
            </Pressable>
        </View>
        <MovieModal 
            isVisible={isModalVisible} 
            hideModal={() => setModalVisibility(false)} 
            image={image}
            title={props.title}
            genres={props.genres}
            rating={props.rating}
            dateReleased={props.dateReleased}
            language={props.language}
            description={props.description}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});
  