import {HStack, Text} from 'native-base';
import React from 'react';

interface Props {
  title: string;
  value: string;
}

function InfoItem({title, value}: Props) {
  return (
    <HStack mt={4} justifyContent={'space-between'}>
      <Text color={'white'}>{title}</Text>
      <Text color={'white'}>{value}</Text>
    </HStack>
  );
}

export default InfoItem;
