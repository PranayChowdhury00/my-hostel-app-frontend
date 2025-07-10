
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BmiCalculator = ({ user }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emailText}>
        Logged in as: {user?.email}
      </Text>

      <Text style={styles.heading}>BMI Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate BMI" onPress={calculateBMI} />
      </View>

      {bmi && (
        <Text style={styles.result}>
          Your BMI is: {bmi}
        </Text>
      )}
    </View>
  );
};

export default BmiCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emailText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  result: {
    fontSize: 22,
    color: '#4caf50',
    marginTop: 20,
    fontWeight: '600',
  },
});
