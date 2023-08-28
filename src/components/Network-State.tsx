import {Center, Spinner, Text} from 'native-base';
import React from 'react';
interface Props {
  isErrorHappend: boolean;
  isLoading: boolean;
  component: JSX.Element;
}
function NetworkState({isErrorHappend, isLoading, component}: Props) {
  return (
    <>
      {isErrorHappend ? (
        <Center mt={10}>
          <Text color={'white'}>Something went wrong</Text>
        </Center>
      ) : isLoading ? (
        <Center flex={1} mt={5}>
          <Spinner color={'white'} size={50} />
        </Center>
      ) : (
        component
      )}
    </>
  );
}

export default NetworkState;
