import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutText}>Nome: Luis Zanin</Text>
      <Text style={styles.aboutText}>RA: 12345678</Text>
      <Text style={styles.aboutText}>Email: seuemail@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1F2', // Cor de fundo suave
    padding: 20,
    justifyContent: 'center',
  },
  aboutText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2B4A69', // Cor do texto suave
  },
});
