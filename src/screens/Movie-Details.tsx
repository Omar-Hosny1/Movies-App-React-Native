import {Box, HStack, useToast, PlayIcon, Pressable, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView} from 'react-native';
import api_properties from '../config/api';
import Movie from '../interfaces/movie';
import InfoItem from '../components/Info-Item';
import {useSelector, useDispatch} from 'react-redux';
import MoviesSliceState from '../interfaces/movies-slice-state';
import {selectMovieById} from '../redux/movies-slice';
import {addToFavorite} from '../redux/favorite-slice';

function MovieDetails({route}: any) {
  const {id} = route.params;

  const {items: movies} = useSelector(
    (state: any) => state.movies,
  ) as MoviesSliceState;

  const selectedMovie = selectMovieById(movies, id);
  const toast = useToast();
  const dispatch = useDispatch();

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
        <Box flex={1}>
          {selectedMovie && (
            <Image
              style={{
                borderRadius: 15,
                flexGrow: 1,
                objectFit: 'cover',
              }}
              source={{
                uri: `${api_properties.IMAGE_URL}${selectedMovie.backdrop_path}`,
              }}
            />
          )}
        </Box>
        <Box flex={2}>
          {selectedMovie && (
            <ScrollView
              style={{
                paddingTop: 5,
              }}>
              <HStack justifyContent={'space-between'} alignItems={'center'}>
                <Text color={'white'} fontSize={30} maxWidth={300}>
                  {selectedMovie.title}
                </Text>
                <PlayIcon color={'white'} size={10} />
              </HStack>
              <Text color={'gray.300'} mt={4}>
                {selectedMovie.overview}
              </Text>
              <InfoItem title="Release Date :" value={movies[0].release_date} />
              <InfoItem
                title="Popularity :"
                value={selectedMovie.popularity.toString()}
              />
              <InfoItem
                title="Vote Count"
                value={selectedMovie.vote_count.toString()}
              />
              <InfoItem
                title="Original Language"
                value={selectedMovie.original_language}
              />
              <Pressable
                onPress={() => {
                  toast.show({
                    render: () => {
                      return (
                        <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                          <Text color={'white'}>Saved</Text>
                        </Box>
                      );
                    },
                  });
                }}
                bg={'white'}
                my={4}
                p={3}
                borderRadius={5}>
                <Text color={'#1b1d28'}>Save</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  dispatch(addToFavorite(selectedMovie));
                  toast.show({
                    render: () => {
                      return (
                        <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                          <Text color={'white'}>Added To Your Favourites</Text>
                        </Box>
                      );
                    },
                  });
                }}
                mb={5}
                bg={'white'}
                p={3}
                borderRadius={5}>
                <Text color={'#1b1d28'}>Add To Favourite</Text>
              </Pressable>
            </ScrollView>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default MovieDetails;
