import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/views/Login/Login';
import { ProductsScreen } from './src/views/Products/Products';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProductList'>
        <Stack.Screen name='ProductList' component={ProductsScreen} 
        options={{ title: 'Lista de productos' }} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;