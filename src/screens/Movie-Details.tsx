import {
  ArrowBackIcon,
  Box,
  Button,
  FavouriteIcon,
  HStack,
  useToast,
  PlayIcon,
  Pressable,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView} from 'react-native';
import api_properties from '../config/api';
import Movie from '../interfaces/movie';
import InfoItem from '../components/Info-Item';

function MovieDetails() {
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
        console.log('****************');
        console.log(moviesData, 'moviesData');

        setMovies(moviesData as Movie[]);
        return moviesData;
      });
  }, []);

  const toast = useToast();

  return (
    <Box
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1e1e27',
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}>
      <HStack h={50} justifyContent={'space-between'} alignItems={'center'}>
        <ArrowBackIcon size={25} color={'white'} />
        <FavouriteIcon size={25} color={'white'} />
      </HStack>

      <Box flex={1}>
        <Box flex={1}>
          {movies[0] && (
            <Image
              style={{
                borderRadius: 15,
                flexGrow: 1,
                objectFit: 'cover',
              }}
              source={{
                uri: `${api_properties.IMAGE_URL}${movies[11].backdrop_path}`,
              }}
            />
          )}
        </Box>
        <Box flex={2}>
          <ScrollView
            style={{
              paddingTop: 5,
            }}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <Text color={'white'} fontSize={30} maxWidth={300}>
                {movies[5].title}
              </Text>
              <PlayIcon color={'white'} size={10} />
            </HStack>
            <Text color={'gray.300'} mt={4}>
              {movies[5].overview}
            </Text>
            <InfoItem title="Release Date :" value={movies[0].release_date} />
            <InfoItem
              title="Popularity :"
              value={movies[5].popularity.toString()}
            />
            <InfoItem
              title="Vote Count"
              value={movies[5].vote_count.toString()}
            />
            <InfoItem
              title="Original Language"
              value={movies[5].original_language}
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
        </Box>
      </Box>
    </Box>
  );
}

export default MovieDetails;
