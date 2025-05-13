import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Carnet from './components/Carnet';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Carnet />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
