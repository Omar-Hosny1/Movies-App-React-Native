import {
  Badge,
  Box,
  FlatList,
  HStack,
  HamburgerIcon,
  Text,
  ZStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import api_properties from '../config/api';
import Movie from '../interfaces/movie';
import MovieItem from '../components/Movie-Item';
import HMovieItem from '../components/HMovie-Item';

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(api_properties.API_URL)
      .then(response => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then(fullData => {
        const moviesData = fullData.results;
        setMovies(moviesData as Movie[]);
        return moviesData;
      });
  }, []);

  return (
    <Box
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1e1e27',
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}>
      <Box flex={1}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Text color={'white'} fontSize={30}>
            Movies
          </Text>
          <HamburgerIcon color={'white'} size={27} />
        </HStack>
        <FlatList
          flex={1}
          horizontal
          data={[...movies].reverse()}
          renderItem={({item}) => <HMovieItem item={item} />}
        />
      </Box>

      <Box flex={3}>
        <Box mb={10}>
          <Text color={'white'} fontSize={25}>
            All Movies
          </Text>
          <FlatList
            numColumns={2}
            data={movies}
            renderItem={({item}) => {
              return <MovieItem item={item} />;
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
