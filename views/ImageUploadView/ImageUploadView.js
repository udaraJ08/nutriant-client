import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Box, Image, StatusBar} from 'native-base';
import fallBack from '../../assets/utils-images/img_1.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageUploadView = ({navigation}) => {
  //routes
  const navigateToArchive = () => {
    navigation.navigate('archive');
  };

  return (
    <Box>
      <StatusBar
        animated={true}
        backgroundColor="#3867d6"
        barStyle="light-content"
      />
      <Box style={style.mainContainer}>
        <Box style={style.innerContainer}>
          {' '}
          <Box style={[style.topic, style.center]}>
            <Text style={[style.fontSmall, style.textTopic]}>Upload image</Text>
          </Box>
          <Box style={[style.imageUpload, style.center]}>
            <Image
              style={[style.imageUp]}
              source={fallBack}
              alt="fallback-image"
            />
          </Box>
          <Box style={[style.typeContainer]}>
            <TouchableOpacity>
              <Box style={[style.imageBtn, style.takeImage]}>
                <Icon name="camera" size={30} color="white" />
              </Box>
            </TouchableOpacity>
            <TouchableOpacity>
              <Box style={[style.imageBtn, style.galleryImageBtn]}>
                <Icon name="image" size={30} color="white" />
              </Box>
            </TouchableOpacity>
          </Box>
          <TouchableOpacity c>
            <Box style={[style.searchBtn, style.center]}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'sans-serif-medium',
                  fontSize: 15,
                }}>
                SEARCH
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
      <TouchableOpacity onPress={navigateToArchive} style={[style.archiveBtn]}>
        <Box style={[style.center]}>
          <Icon name="building-o" size={25} color="white" />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const style = StyleSheet.create({
  archiveBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
    borderRadius: 1000,
    backgroundColor: '#0984e3',
    borderColor: 'white',
    padding: 15,
    paddingLeft: 18,
    paddingRight: 18,
    borderWidth: 2,
  },
  imageBtn: {
    borderRadius: 1000,
    padding: 15,
    borderColor: 'white',
    borderWidth: 2,
  },
  takeImage: {
    backgroundColor: '#fc5c65',
  },
  galleryImageBtn: {
    backgroundColor: '#20bf6b',
  },
  searchBtn: {
    borderColor: 'white',
    borderWidth: 2,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fc5c65',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUp: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  mainContainer: {
    backgroundColor: '#3867d6',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '90%',
    height: '85%',
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

export default ImageUploadView;
