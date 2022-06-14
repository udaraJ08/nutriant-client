import React from 'react';
import {Box, Image, Progress, StatusBar, Text} from 'native-base';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FruitDetailsView = ({navigation}) => {
  //routes
  const navigateToArchive = () => {
    navigation.navigate('archive');
  };

  const navigateToRealTime = () => {
    navigation.navigate('home');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Box style={[style.mainContainer]}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Box style={[style.headerContainer]}>
        <Image
          style={[style.headerImage]}
          alt="mango"
          source={{
            uri: 'https://media.istockphoto.com/photos/mango-picture-id168370138?k=20&m=168370138&s=612x612&w=0&h=yZRNE3sEWMoFNHI0vQWvn4baLwjLK35MWqbN6j-kM5Y=',
          }}
        />
      </Box>
      <Box style={[style.detailsContainer]}>
        <Text style={[style.headerTopic]}>Mango</Text>
        <Text style={[style.subTitle]}>"Be sweet as a mango"</Text>
        <ScrollView style={{marginTop: 20}}>
          <Text style={[style.description]}>
            A mango is an edible stone fruit produced by the tropical tree
            Mangifera indica which is believed to have originated from the
            region between northwestern Myanmar, Bangladesh, and northeastern
            India.
          </Text>
          <Text style={[style.subTopics, {marginTop: 40}]}>General</Text>
          <Box style={{marginTop: 10}}>
            <Box style={[style.optionBox]}>
              <Text
                style={[style.options, style.fontWeight, style.textSemiDark]}>
                1. Name
              </Text>
              <Text style={[style.options]}>Mango</Text>
            </Box>
            <Box style={[style.optionBox]}>
              <Text
                style={[style.options, style.fontWeight, style.textSemiDark]}>
                2. Genes
              </Text>
              <Text style={[style.options]}>Mangifera</Text>
            </Box>
            <Box style={[style.optionBox]}>
              <Text
                style={[style.options, style.fontWeight, style.textSemiDark]}>
                3. Family
              </Text>
              <Text style={[style.options]}>Anacardiaceae</Text>
            </Box>
            <Box style={[style.optionBox]}>
              <Text
                style={[style.options, style.fontWeight, style.textSemiDark]}>
                3. Order
              </Text>
              <Text style={[style.options]}>Sapindales</Text>
            </Box>
          </Box>
          <Box style={{marginTop: 10}}>
            <Text style={[style.subTopics, {marginTop: 20}]}>Nutrition</Text>
          </Box>
          <Box style={{marginTop: 10}}>
            <Box style={[style.optionBox]}>
              <Text
                style={[
                  style.options,
                  style.fontWeight,
                  style.textSemiDark,
                  {fontSize: 14},
                ]}>
                1. carbohydrates ({15}g)
              </Text>
              <Box style={{width: '40%', marginTop: 20}}>
                <Progress size="xs" mb={4} value={25} />
              </Box>
            </Box>
            <Box style={[style.optionBox]}>
              <Text
                style={[
                  style.options,
                  style.fontWeight,
                  style.textSemiDark,
                  {fontSize: 15},
                ]}>
                2. protein (0.82g)
              </Text>
              <Box style={{width: '40%', marginTop: 20}}>
                <Progress size="xs" mb={4} value={25} />
              </Box>
            </Box>
            <Box style={[style.optionBox]}>
              <Text
                style={[
                  style.options,
                  style.fontWeight,
                  style.textSemiDark,
                  {fontSize: 15},
                ]}>
                3. fat (0.38g)
              </Text>
              <Box style={{width: '40%', marginTop: 20}}>
                <Progress size="xs" mb={4} value={0.25 * 100} mx={1} />
              </Box>
            </Box>
            <Box style={[style.optionBox]}>
              <Text
                style={[
                  style.options,
                  style.fontWeight,
                  style.textSemiDark,
                  {fontSize: 15},
                ]}>
                4. calories (60cal)
              </Text>
              <Box style={{width: '40%', marginTop: 20}}>
                <Progress size="xs" mb={4} value={25} />
              </Box>
            </Box>
            <Box style={[style.optionBox]}>
              <Text
                style={[
                  style.options,
                  style.fontWeight,
                  style.textSemiDark,
                  {fontSize: 15},
                ]}>
                5. sugar (13.7g)
              </Text>
              <Box style={{width: '40%', marginTop: 20}}>
                <Progress size="xs" mb={4} value={25} />
              </Box>
            </Box>
          </Box>
        </ScrollView>
      </Box>
      <TouchableOpacity onPress={navigateToArchive} style={[style.archiveBtn]}>
        <Box style={[style.center]}>
          <Icon name="building-o" size={25} color="white" />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={navigateToRealTime}
        style={[style.realTimeBtn]}>
        <Box style={[style.center]}>
          <Icon name="camera" size={25} color="white" />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateBack} style={[style.backBtn]}>
        <Box style={[style.center]}>
          <Icon name="chevron-left" size={25} color="#5d5d5d" />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const style = StyleSheet.create({
  optionBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  realTimeBtn: {
    position: 'absolute',
    right: 20,
    top: 70,
    borderRadius: 1000,
    backgroundColor: '#ff7979',
    borderColor: 'white',
    padding: 15,
    borderWidth: 2,
  },
  backBtn: {
    position: 'absolute',
    left: 20,
    top: 10,
  },
  fontWeight: {
    fontWeight: 'bold',
  },
  options: {
    marginTop: 10,
    fontSize: 16,
    color: '#393e46',
  },
  textSemiDark: {
    color: '#5d5d5d',
  },
  subTitle: {
    color: '#0668b4',
    fontSize: 15,
    marginTop: 0,
  },
  subTopics: {
    color: '#393e46',
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  description: {
    color: '#393e46',
    fontSize: 16,
  },
  headerTopic: {
    color: '#0984e3',
    fontSize: 50,
    marginTop: 10,
    fontWeight: 'bold',
    lineHeight: 50,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  archiveBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
    borderRadius: 1000,
    backgroundColor: '#0984e3',
    padding: 15,
    paddingLeft: 18,
    paddingRight: 18,
    borderWidth: 2,
    borderColor: 'white',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    height: '35%',
  },
  detailsContainer: {
    borderTopRightRadius: 100,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    flex: 12,
    // height: '65%',
    // backgroundColor: '#fff1b4',
  },
});

export default FruitDetailsView;
