import React from 'react';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import ImageUploadView from './views/ImageUploadView/ImageUploadView';
import {StatusBar} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar animated={true} backgroundColor="#3867d6" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={ImageUploadView} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
