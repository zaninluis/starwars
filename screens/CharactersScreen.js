import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => setCharacters(response.data.results.slice(0, 5))) // Exibir 5 personagens
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
      
      {/* Botão para acessar a tela de Sobre */}
      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.aboutButtonText}>Sobre o App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1F2',
    padding: 20,
  },
  characterCard: {
    backgroundColor: '#CDE7F0',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#B0D4DA',
    borderWidth: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2B4A69',
  },
  aboutButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#B3CDE0',
    borderRadius: 8,
    alignItems: 'center',
  },
  aboutButtonText: {
    fontSize: 16,
    color: '#2B4A69',
    fontWeight: 'bold',
  },
});
