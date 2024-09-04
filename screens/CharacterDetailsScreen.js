import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CharacterDetailsScreen({ route, navigation }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Nome: {character.name}</Text>
      <Text style={styles.detailText}>Altura: {character.height}</Text>
      <Text style={styles.detailText}>Peso: {character.mass}</Text>
      <Text style={styles.detailText}>Cor do cabelo: {character.hair_color}</Text>
      <Text style={styles.detailText}>Cor da pele: {character.skin_color}</Text>
      <Text style={styles.detailText}>Cor dos olhos: {character.eye_color}</Text>
      <Text style={styles.detailText}>Gênero: {character.gender}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Naves"
          color="#6BBF59" // Botão com cor suave
          onPress={() => navigation.navigate('Starships', { starships: character.starships })}
        />
        <Button
          title="Filmes"
          color="#6BA8BF" // Botão com cor suave
          onPress={() => navigation.navigate('Movies', { films: character.films })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1F2', // Cor de fundo suave
    padding: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#2B4A69', // Cor do texto suave
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
