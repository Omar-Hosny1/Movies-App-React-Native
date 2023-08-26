import {Box, Text, ZStack} from 'native-base';
import {Image} from 'react-native';
import React from 'react';
import api_properties from '../config/api';
import Movie from '../interfaces/movie';

interface Props {
  item: Movie;
}

function HMovieItem({item}: Props) {
  return (
    <ZStack position={'relative'} width={400} height={200} flex={1} mr={2}>
      <Image
        source={{
          uri: `${api_properties.IMAGE_URL}${item.backdrop_path}`,
        }}
        style={{
          borderRadius: 10,
          width: 400,
          height: 200,
        }}
      />
      <Box
        width={400}
        borderRadius={10}
        height={200}
        bg={'black'}
        opacity={0.7}
      />
      <Box m={2} maxW={330}>
        <Text color={'white'} fontSize={25}>
          {item.title.toUpperCase().slice(0, 15) + '...'}
        </Text>
        <Text color={'gray.300'}>{item.overview.slice(0, 100) + '...'}</Text>
        <Text mt={1} fontSize={12} color={'yellow.200'}>
          {item.release_date}
        </Text>
      </Box>
    </ZStack>
  );
}

export default HMovieItem;
