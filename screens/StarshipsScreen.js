import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function StarshipsScreen({ route }) {
  const { starships } = route.params;
  const [starshipData, setStarshipData] = useState([]);

  useEffect(() => {
    if (starships.length > 0) {
      Promise.all(starships.map(url => axios.get(url)))
        .then(responses => setStarshipData(responses.map(response => response.data)))
        .catch(error => console.error(error));
    }
  }, [starships]);

  return (
    <View style={styles.container}>
      {starshipData.length > 0 ? (
        <FlatList
          data={starshipData}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={styles.starshipCard}>
              <Text style={styles.starshipText}>Nome: {item.name}</Text>
              <Text style={styles.starshipText}>Modelo: {item.model}</Text>
              <Text style={styles.starshipText}>Passageiros: {item.passengers}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noDataText}>Não há naves disponíveis</Text>
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
  starshipCard: {
    backgroundColor: '#CDE7F0', // Cor suave para os cards
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#B0D4DA', // Borda suave
    borderWidth: 1,
  },
  starshipText: {
    fontSize: 16,
    color: '#2B4A69', // Cor do texto suave
  },
  noDataText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
  },
});
