import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Home from './src/pages/Home'
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121E26',
    alignItems: 'center',
  },
});
