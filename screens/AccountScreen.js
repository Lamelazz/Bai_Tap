import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AccountScreen({ navigation }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      const name = await AsyncStorage.getItem('username');
      if (name) setUsername(name);
    };
    loadUser();
  }, []);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('username');
    navigation.replace('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.headerBackground} />
      <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
      <Text style={styles.name}>{username || 'Lam Nguyen'}</Text>
      <Text style={styles.role}>Mobile Developer</Text>
      <Text style={styles.description}>
        I have above 1 years of experience in native mobile apps development, now I am learning React Native
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 50, marginBottom: 10 },
  headerBackground: { width: '100%', height: 120, backgroundColor: '#00BFFF' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginTop: -50, borderWidth: 3, borderColor: '#fff' },
  name: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  role: { color: '#00BFFF', marginTop: 5, fontSize: 16 },
  description: { marginTop: 15, textAlign: 'center', paddingHorizontal: 30, fontSize: 14, color: '#333' },
  button: { backgroundColor: 'orange', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
