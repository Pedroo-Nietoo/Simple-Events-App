import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/sign-in';
import Home from './pages/home';
import Cadastro from './pages/auth/sign-up';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignIn" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={Cadastro} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerBackVisible: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;