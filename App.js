import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersScreen from './screens/CharactersScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen';
import StarshipsScreen from './screens/StarshipsScreen';
import MoviesScreen from './screens/MoviesScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
        <Stack.Screen name="Starships" component={StarshipsScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
