import React, {useEffect, useState} from 'react';
import {Box, Image, Progress, StatusBar, Text} from 'native-base';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from '../../axios/axios';
import CookDataLoader from '../../components/loaders/CookDataLoader';

const FruitDetailsView = ({route, navigation}) => {
  //states
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);

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

  //API callings
  const fetchFruitByID = async () => {
    setLoader(true);
    await axios
      .get(`/fruits/${route.params.id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err.message);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchFruitByID();
  }, []);

  return (
    <Box style={[style.mainContainer]}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Box style={[style.detailsContainer]}>
        {loader ? (
          <CookDataLoader color={'black'} />
        ) : (
          <>
            <Box style={[style.headerContainer]}>
              <Image
                style={[style.headerImage]}
                alt="mango"
                source={{
                  uri: data?.image,
                }}
              />
            </Box>
            <Text style={[style.headerTopic, {color: data?.color}]}>
              {data?.name}
            </Text>
            <Text style={[style.subTitle]}>"{data?.subTitle}"</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{marginTop: 20}}>
              <Text style={[style.description]}>{data?.description}</Text>
              <Text style={[style.subTopics, {marginTop: 40}]}>General</Text>
              <Box style={{marginTop: 10}}>
                <Box style={[style.optionBox]}>
                  <Text
                    style={[
                      style.options,
                      style.fontWeight,
                      style.textSemiDark,
                    ]}>
                    1. Name
                  </Text>
                  <Text style={[style.options]}>{data?.gen_name}</Text>
                </Box>
                <Box style={[style.optionBox]}>
                  <Text
                    style={[
                      style.options,
                      style.fontWeight,
                      style.textSemiDark,
                    ]}>
                    2. Genes
                  </Text>
                  <Text style={[style.options]}>{data?.gen_genes}</Text>
                </Box>
                <Box style={[style.optionBox]}>
                  <Text
                    style={[
                      style.options,
                      style.fontWeight,
                      style.textSemiDark,
                    ]}>
                    3. Family
                  </Text>
                  <Text style={[style.options]}>{data?.gen_family}</Text>
                </Box>
                <Box style={[style.optionBox]}>
                  <Text
                    style={[
                      style.options,
                      style.fontWeight,
                      style.textSemiDark,
                    ]}>
                    3. Order
                  </Text>
                  <Text style={[style.options]}>{data?.gen_order}</Text>
                </Box>
              </Box>
              <Box style={{marginTop: 10}}>
                <Text style={[style.subTopics, {marginTop: 20}]}>
                  Nutrition
                </Text>
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
                    1. carbohydrates ({data?.carbohydrates}g)
                  </Text>
                  <Box style={{width: '40%', marginTop: 20}}>
                    <Progress size="xs" mb={4} value={data?.carbohydrates} />
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
                    2. protein ({data?.protein}g)
                  </Text>
                  <Box style={{width: '40%', marginTop: 20}}>
                    <Progress size="xs" mb={4} value={data?.protein} />
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
                    3. fat ({data?.fat}g)
                  </Text>
                  <Box style={{width: '40%', marginTop: 20}}>
                    <Progress size="xs" mb={4} value={data?.fat * 100} mx={1} />
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
                    4. calories ({data?.calories}cal)
                  </Text>
                  <Box style={{width: '40%', marginTop: 20}}>
                    <Progress size="xs" mb={4} value={data?.calories} />
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
                    5. sugar ({data?.sugar}g)
                  </Text>
                  <Box style={{width: '40%', marginTop: 20}}>
                    <Progress size="xs" mb={4} value={data?.sugar} />
                  </Box>
                </Box>
              </Box>
            </ScrollView>
          </>
        )}
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
    color: '#fa8231',
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
    textAlign: 'justify',
  },
  headerTopic: {
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
