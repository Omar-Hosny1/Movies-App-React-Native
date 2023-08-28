import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FavouritesSliceState from '../interfaces/favourites-slice-state';
import {Box, Button, Center, FlatList, Text} from 'native-base';
import FavoriteItem from '../components/Favourite-Item';

function Favourites({navigation}: {navigation: any}) {
  const {items} = useSelector(
    (state: any) => state.favorites,
  ) as FavouritesSliceState;

  return (
    <Box
      style={{
        paddingVertical: 10,
        backgroundColor: '#1e1e27',
        flex: 1,
        paddingHorizontal: 15,
      }}>
      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={({item}) => {
            return <FavoriteItem movie={item} />;
          }}
        />
      ) : (
        <Center mt={5}>
          <Text color={'white'} fontSize={20}>
            No Favourite Movies Found
          </Text>
          <Button
            mt={2}
            colorScheme={'dark'}
            color={'black'}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text color={'black'}>Explore Movies</Text>
          </Button>
        </Center>
      )}
    </Box>
  );
}

export default Favourites;
