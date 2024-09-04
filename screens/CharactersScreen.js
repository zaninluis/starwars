import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function CharactersScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => setCharacters(response.data.results.slice(0, 5))) // Pega os primeiros 5 personagens
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.characterCard}
            onPress={() => navigation.navigate('CharacterDetails', { character: item })}
          >
            <Text style={styles.characterName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1F2', // Cor de fundo suave
    padding: 20,
  },
  characterCard: {
    backgroundColor: '#CDE7F0', // Cor suave para os cards
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#B0D4DA', // Borda suave
    borderWidth: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2B4A69', // Cor do texto mais suave
  },
});
