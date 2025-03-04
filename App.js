import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignInScreen } from './screens/SignInScreen';
import { ExplorerScreen } from './screens/ExplorerScreen';
import { AccountScreen } from './screens/AccountScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigation
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Explorer" 
        component={ExplorerScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="explore" size={24} color={color} /> }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="person" size={24} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
