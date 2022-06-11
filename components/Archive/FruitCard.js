import React from 'react';
import {Box, Image, Text} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';

const FruitCard = () => {
  return (
    <Box style={[style.mainContainer, {backgroundColor: 'white'}]}>
      <Box style={[style.center]}>
        <Text style={[style.topic]}>Mango</Text>
      </Box>
      <Box>
        <Image
          style={style.image}
          source={{
            uri: 'https://media.istockphoto.com/photos/mango-picture-id168370138?k=20&m=168370138&s=612x612&w=0&h=yZRNE3sEWMoFNHI0vQWvn4baLwjLK35MWqbN6j-kM5Y=',
          }}
          alt="apple"
        />
      </Box>
      <Box style={[style.center]}>
        <TouchableOpacity style={[style.btn]}>
          <Text style={[style.btnText]}>details</Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const style = StyleSheet.create({
  btnText: {
    fontSize: 15,
    color: 'white',
  },
  btn: {
    backgroundColor: '#2047a6',
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 30,
    borderRadius: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  mainContainer: {
    borderRadius: 20,
    width: '48%',
    height: 240,
    marginBottom: 20,
  },
  topic: {
    color: '#3d4450',
    fontSize: 15,
  },
  textTopic: {
    color: 'white',
    fontFamily: 'sans-serif-medium',
  },
  fontSmall: {
    fontSize: 20,
  },
});

export default FruitCard;
