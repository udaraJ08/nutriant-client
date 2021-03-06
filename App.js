import React from 'react';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import ImageUploadView from './views/ImageUploadView/ImageUploadView';
import {StatusBar} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import ArchiveView from './views/ArchiveView/ArchiveView';
import FruitDetailsView from './views/FruitDetailsView/FruitDetailsView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar animated={true} backgroundColor="#3867d6" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="archive"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="home"
            component={ImageUploadView}
          />
          <Stack.Screen
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="archive"
            component={ArchiveView}
          />
          <Stack.Screen
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="details"
            component={FruitDetailsView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
