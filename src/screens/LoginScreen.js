import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.button}>
        <Button title="Login" onPress={loginUser} />
      </View>

      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register here
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  heading: { fontSize: 28, marginBottom: 30 },
  input: { width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, marginVertical: 10 },
  button: { width: '80%', marginTop: 10 },
  link: { marginTop: 20, color: 'blue' },
});
