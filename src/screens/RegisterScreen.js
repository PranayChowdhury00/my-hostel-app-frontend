import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      
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
        <Button title="Register" onPress={registerUser} />
      </View>

      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login here
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  heading: { fontSize: 28, marginBottom: 30 },
  input: { width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, marginVertical: 10 },
  button: { width: '80%', marginTop: 10 },
  link: { marginTop: 20, color: 'blue' },
});
