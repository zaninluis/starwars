import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function MoviesScreen({ route }) {
  const { films } = route.params;
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      Promise.all(films.map(url => axios.get(url)))
        .then(responses => setFilmData(responses.map(response => response.data)))
        .catch(error => console.error(error));
    }
  }, [films]);

  return (
    <View style={styles.container}>
      {filmData.length > 0 ? (
        <FlatList
          data={filmData}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View style={styles.filmCard}>
              <Text style={styles.filmText}>Título: {item.title}</Text>
              <Text style={styles.filmText}>Diretor: {item.director}</Text>
              <Text style={styles.filmText}>Lançamento: {item.release_date}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noDataText}>Não há filmes disponíveis</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1F2', // Cor de fundo suave
    padding: 20,
  },
  filmCard: {
    backgroundColor: '#CDE7F0', // Cor suave para os cards
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#B0D4DA', // Borda suave
    borderWidth: 1,
  },
  filmText: {
    fontSize: 16,
    color: '#2B4A69', // Cor do texto suave
  },
  noDataText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
  },
});
