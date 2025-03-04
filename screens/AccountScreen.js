import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nguyen Lam</Text>
      <Text style={styles.role}>Mobile Developer</Text>
      <Text>I have above 1 years of experience in native mobile apps development, now I am learning React Native.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('SignIn')}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  name: { fontSize: 22, fontWeight: 'bold' },
  role: { color: 'blue', marginBottom: 10 },
  button: { backgroundColor: 'orange', padding: 10, marginTop: 20 },
  buttonText: { color: 'white' },
});
