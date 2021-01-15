import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, useWindowDimensions, View, Text } from 'react-native';

import HeaderBar from '../components/HeaderBar';
import MovieCard from '../components/MovieCard';
import ButtonActions from '../components/ButtonActions';

import Swiper from 'react-native-deck-swiper';

const sampleMovieData = [
  {
    title: 'Aladdin',
    rating: '8.5 / 10',
    genres: 'Action, Thriller',
    dateReleased: 'January 03, 1979',
    language: 'English',
    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg',
    description: "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true. Aladdin featuring Mena Massoud and Naomi Scott is streaming with subscription on Disney+, available for rent or purchase on iTunes, available for rent or purchase on Prime Video, and 3 others. It's an action & adventure and comedy movie with a better than average IMDb audience rating of 6.9 (225,977 votes) and was met with mixed reviews by critics.",
  },
  {
    title: 'Tenet',
    rating: '7.5 / 10',
    genres: 'Action, Sci-fi',
    dateReleased: 'January 03, 2020',
    language: 'English',
    coverURL: 'https://m.media-amazon.com/images/M/MV5BOGJmZjcxNTAtYjViZS00YzJmLTlkMzgtZmVkYTQ5YjUwMjIyXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    description: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time. Tenet featuring John David Washington and Robert Pattinson is available for rent or purchase on Prime Video, available for rent or purchase on Microsoft Store, and available for rent or purchase on VUDU. It's an action & adventure and drama movie with a better than average IMDb audience rating of 7.5 (261,609 votes) and was well received by critics.",
  },
  {
    title: 'Horizon Line',
    rating: '4.8 / 10',
    genres: 'Action, Thriller',
    dateReleased: 'January 01, 1999',
    language: 'English',
    coverURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAE-omDY2XqufEMlIh7rMaRbTwOPO4TEp-4GAJQfXfC7-ejXH8',
    description: "A couple flying on a small plane to attend a tropical island wedding must fight for their lives after their pilot suffers a heart attack. Horizon Line featuring Allison Williams and Keith David is available for rent or purchase on Prime Video, and available for rent or purchase on VUDU. It's a thriller movie with a less than average IMDb audience rating of 4.9 (492 votes) and was disliked by critics.",
  },
  {
    title: 'The Midnight Sky',
    rating: '5.6 / 10',
    genres: 'Sci-fi, Drama',
    dateReleased: 'January 05, 2000',
    language: 'English',
    coverURL: 'https://m.media-amazon.com/images/M/MV5BNDQwYjJjODMtOWNmNC00NDJjLThiNDgtNzVkOTM1MjY5NDQ5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg',
    description: "A lone scientist in the Arctic races to contact a crew of astronauts returning home to a mysterious global catastrophe.  The Midnight Sky featuring George Clooney and Felicity Jones is streaming with subscription on Netflix. It's a drama and fantasy movie with an average IMDb audience rating of 5.6 (55,281 votes) and was met with mixed reviews by critics.",
  },
];

export default function MovieMatchScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
          <HeaderBar />
          <View style={{flex: 1, zIndex: 1}}>
            <Swiper
              backgroundColor={'#FFFFFF'}
              cards={sampleMovieData}
              renderCard={(movie) => {
                return (
                  <MovieCard 
                    title={movie.title} 
                    image={movie.coverURL} 
                    genres={movie.genres} 
                    rating={movie.rating} 
                    dateReleased={movie.dateReleased} 
                    language={movie.language} 
                    description={movie.description}
                  />
                )
              }}
              cardVerticalMargin={0}
              stackSize={3}
              overlayLabels={overlayLabels}
              animateOverlayLabelsOpacity
              animateCardOpacity
            >
            </Swiper>
          </View>
          <View>
            <ButtonActions />
          </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const overlayLabels = {
  bottom: {
    title: 'MEH',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: 'grey',
        color: 'grey',
        borderWidth: 3
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30,
      }
    }
  },
  left: {
    title: 'NOPE',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: 'red',
        color: 'red',
        borderWidth: 3
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30
      }
    }
  },
  right: {
    title: 'LIKE',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: 'green',
        color: 'green',
        borderWidth: 3
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30
      }
    }
  },
  top: {
    title: 'SUPER LIKE',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: 'blue',
        color: 'blue',
        borderWidth: 3
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
      }
    }
  }
};