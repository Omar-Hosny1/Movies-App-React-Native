import React from 'react';
import {Image} from 'react-native';
import {Badge, Box, Text} from 'native-base';
import api_properties from '../config/api';
import Movie from '../interfaces/movie';
import {TouchableWithoutFeedback} from 'react-native';

interface Props {
  item: Movie;
  navigation: any;
}

const MovieItem = ({item, navigation}: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Details', {id: item.id})}>
      <Box
        px={5}
        flex={1}
        py={2}
        w={5}
        my={2}
        mx={1}
        borderRadius={5}
        borderWidth={1}
        justifyContent={'center'}
        alignItems={'center'}
        borderColor={'white'}>
        <Image
          source={{
            uri: `${api_properties.IMAGE_URL}${item.poster_path}`,
          }}
          style={{
            width: 200,
            height: 200,
            objectFit: 'contain',
          }}
        />
        <Text width={'full'} flexDir={'row'} marginTop={2} color={'white'}>
          {item.title.slice(0, 15) + '...'}
        </Text>
        <Text width={'full'} flexDir={'row'} color={'gray.400'}>
          {item.release_date}
        </Text>
        <Box w={'100%'} mt={1}>
          <Badge colorScheme={item.vote_count < 1000 ? 'danger' : 'success'}>
            {item.vote_count}
          </Badge>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default MovieItem;
