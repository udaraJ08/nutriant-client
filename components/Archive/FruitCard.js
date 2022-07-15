import React from 'react';
import {Box, Image, Text} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';

const FruitCard = ({navigation, data, id}) => {
  const navigateToDetails = () => {
    navigation.navigate('details', {id});
  };

  return (
    <Box style={[style.mainContainer, {backgroundColor: 'white'}]}>
      <Box style={[style.center]}>
        <Text style={[style.topic]}>{data?.name}</Text>
      </Box>
      <Box style={{marginTop: 10}}>
        <Image
          style={style.image}
          source={{
            uri: data?.image,
          }}
          alt="apple"
        />
      </Box>
      <Box style={[style.center]}>
        <TouchableOpacity onPress={navigateToDetails} style={[style.btn]}>
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
    height: '80%',
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
