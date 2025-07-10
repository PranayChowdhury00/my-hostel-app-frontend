import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BMI App</Text>
      <View style={styles.button}>
        <Button 
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.button}>
        <Button 
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:28, marginBottom:30 },
  button: { width:'80%', marginVertical:10 },
});
