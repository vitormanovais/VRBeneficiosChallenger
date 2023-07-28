import React from 'react';
import {View, StyleSheet} from 'react-native';
import RootNavigator from './src/pages/routes';
import store from './src/contexts/redux';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
