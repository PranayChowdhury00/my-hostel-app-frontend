import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';  // <-- Add this
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';

import { enableScreens } from 'react-native-screens';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import BmiCalculator from './src';

const Stack = createStackNavigator();

export default function App() {
  enableScreens();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen
              name="BMI Calculator"
              options={{
                headerRight: () => (
                  <Text
                    onPress={() => signOut(auth)}
                    style={{ marginRight: 15, color: 'blue' }}
                  >
                    Logout
                  </Text>
                ),
              }}
            >
              {() => <BmiCalculator user={user} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
