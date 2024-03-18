/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './components/views/LoginScreen';
import { ImageBackground, SafeAreaView, Text } from 'react-native';
import AppStack from './components/AppStack';

const pawIcon = {uri: 'https://cdn-icons-png.flaticon.com/512/12/12638.png'};

const App = () => {

  return(
    <SafeAreaView style={{flex: 1}}>
      <AppStack />
    </SafeAreaView>
  )
}



export default App;
