/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ReduxProvider} from './redux';
import {AppNavigator} from './navigation';
import React from 'react';

function App(): JSX.Element {
  return (
    <ReduxProvider>
      <AppNavigator />
    </ReduxProvider>
  );
}

export default App;
