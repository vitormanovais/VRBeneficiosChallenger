import React from 'react';
import {View, StyleSheet} from 'react-native';
import RootNavigator from './src/pages/routes/routes';
import store from './src/contexts/redux';
import {Provider} from 'react-redux';
import Modal from './src/components/Modal/Modal';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Modal />
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
