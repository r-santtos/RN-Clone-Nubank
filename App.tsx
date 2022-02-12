/** CONVERTER PARA MOEDAS */
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#24282d', flex: 1}}>
      <>
        <StatusBar style='light' backgroundColor='#8100dd' />
        <Routes />
      </>
    </SafeAreaView>
  );
}