import { StyleSheet, View, ScrollView } from 'react-native';

import Home from './src/pages/Home'
import Header from './src/components/Header';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Home />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121E26',
    alignItems: 'center',
  },
});
