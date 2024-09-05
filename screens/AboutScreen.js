import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.aboutText}>Nome: Luis Eduardo Cervo Zanin</Text>
        <Text style={styles.aboutText}>RA: 1136493</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.aboutText}>Nome: João Inacio Campana Moraes</Text>
        <Text style={styles.aboutText}>RA: 1135445</Text>
      </View>
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
  innerContainer: {
    marginBottom: 20, // Espaçamento entre as informações de cada aluno
  },
  aboutText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2B4A69', // Cor do texto suave
  },
});
