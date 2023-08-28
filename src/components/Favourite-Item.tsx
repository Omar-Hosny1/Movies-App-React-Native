import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Movie from '../interfaces/movie';
import api_properties from '../config/api';
import {useDispatch} from 'react-redux';
import {removeFromFavorite} from '../redux/favorite-slice';
import {Badge} from 'native-base';
import AlertDialogComponent from './Alert-Dialog';

interface Props {
  movie: Movie;
}

const FavoriteItem = ({movie}: Props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${api_properties.IMAGE_URL}${movie.backdrop_path}`}}
        style={styles.poster}
      />
      <AlertDialogComponent
        isOpen={isOpen}
        title="Are You Sure?"
        description="Are you sure you want to remove this Movie?"
        setIsOpen={setIsOpen}
        onConfirm={() => {
          dispatch(removeFromFavorite(movie.id));
        }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <TouchableOpacity
        onPress={() => {
          setIsOpen(true);
        }}>
        <Badge w={100} colorScheme={'gray'}>
          remove
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#293854',
    borderRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'white',
  },
  poster: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  favoriteButton: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    alignSelf: 'flex-start',
  },
  favoriteButtonActive: {
    backgroundColor: 'orange',
  },
  favoriteButtonText: {
    color: '#fff',
  },
});

export default FavoriteItem;
