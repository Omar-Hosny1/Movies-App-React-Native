import {Box, Center, FlatList, HStack, HamburgerIcon, Text} from 'native-base';
import React, {useEffect} from 'react';
import MovieItem from '../components/Movie-Item';
import HMovieItem from '../components/HMovie-Item';
import {GetAllMovies} from '../redux/movies-slice';
import {useSelector, useDispatch} from 'react-redux';
import MoviesSliceState from '../interfaces/movies-slice-state';
import NetworkState from '../components/Network-State';

function Home({navigation}: {navigation: any}) {
  const {
    items: movies,
    isErrorHappend,
    isLoading,
  } = useSelector((state: any) => state.movies) as MoviesSliceState;

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(GetAllMovies());
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
        <NetworkState
          isErrorHappend={isErrorHappend}
          isLoading={isLoading}
          component={
            movies.length > 0 ? (
              <FlatList
                flex={1}
                horizontal
                data={[...movies].reverse()}
                renderItem={({item}) => <HMovieItem item={item} />}
              />
            ) : (
              <Center mt={5}>
                <Text>No Movies Found</Text>
              </Center>
            )
          }
        />
      </Box>

      <Box flex={3}>
        <Box mb={10}>
          <Text color={'white'} fontSize={25}>
            All Movies
          </Text>
          <NetworkState
            isErrorHappend={isErrorHappend}
            isLoading={isLoading}
            component={
              movies.length > 0 ? (
                <FlatList
                  numColumns={2}
                  data={movies}
                  renderItem={({item}) => {
                    return <MovieItem item={item} navigation={navigation} />;
                  }}
                />
              ) : (
                <Center mt={5}>
                  <Text>No Movies Found</Text>
                </Center>
              )
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
