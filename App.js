import React from 'react';
import {SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeNavigation from './src/navigation/HomeNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles(isDarkMode).container}>
          <HomeNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
  });

export default App;
