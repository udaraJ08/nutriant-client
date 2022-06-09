import React from 'react';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import ImageUploadView from './views/ImageUploadView/ImageUploadView';
import {StatusBar} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar animated={true} backgroundColor="#3867d6" />
      <ImageUploadView />
    </NativeBaseProvider>
  );
};

export default App;
