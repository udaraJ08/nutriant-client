import {Box, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Spinner from 'react-native-spinkit';

const CookDataLoader = ({color}) => {
  return (
    <Box style={[style.mainContainer]}>
      <Spinner type="ChasingDots" size={100} color={color} />
    </Box>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'transparent',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderText: {
    color: 'white',
  },
});

export default CookDataLoader;
