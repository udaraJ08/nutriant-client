import React from 'react';
import {Box, Input, StatusBar} from 'native-base';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import FruitCard from '../../components/Archive/FruitCard';
import Icon from 'react-native-vector-icons/FontAwesome';

const ArchiveView = ({navigation}) => {
  const navigateHome = () => {
    navigation.navigate('home');
  };

  return (
    <Box style={style.mainContainer}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Box style={[style.innerContainer]}>
        <Box style={[style.searchContainer]}>
          <Input
            placeholderTextColor="blue"
            variant="underlined"
            placeholder="search me..."
            style={[style.searchField]}
          />
        </Box>
        <ScrollView style={[style.dataContainer]}>
          <Box
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginBottom: 10,
            }}>
            <FruitCard navigation={navigation} />
            <FruitCard navigation={navigation} />
            <FruitCard navigation={navigation} />
            <FruitCard navigation={navigation} />
            <FruitCard navigation={navigation} />
            <FruitCard navigation={navigation} />
            <FruitCard navigation={navigation} />
            <FruitCard navigation={navigation} />
          </Box>
        </ScrollView>
      </Box>
      <TouchableOpacity onPress={navigateHome} style={[style.realTimeBtn]}>
        <Box style={[style.center]}>
          <Icon name="camera" size={25} color="white" />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const style = StyleSheet.create({
  realTimeBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
    borderRadius: 1000,
    backgroundColor: '#ff7979',
    borderColor: 'white',
    padding: 15,
    borderWidth: 2,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchField: {
    color: '#444444',
    fontSize: 16,
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  mainContainer: {
    backgroundColor: '#3867d6',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  searchContainer: {
    border: 'none',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    borderRadius: 10,
    marginBottom: 30,
  },
  dataContainer: {
    padding: 10,
    width: '100%',
    flex: 12,
    borderRadius: 10,
  },
  topic: {
    flex: 1,
  },
  imageUpload: {
    flex: 3,
  },
  typeContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textTopic: {
    color: 'white',
    fontFamily: 'sans-serif-medium',
  },
  fontSmall: {
    fontSize: 20,
  },
});

export default ArchiveView;
