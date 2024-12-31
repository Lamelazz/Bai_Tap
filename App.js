import { StyleSheet, Text, TextInput, View, TouchableOpacity  } from 'react-native';
import React from 'react';



export default function App() {
  return (
  <View style={styles.container}>
  <Text style={styles.title}>Đăng nhập</Text>

  <View style={styles.inputContainer}>
    <Text style={styles.label}>Nhập số điện thoại</Text>
    <Text style={styles.description}>
      Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
    </Text>
    <TextInput 
      style={styles.textInput} 
      placeholder="Nhập số điện thoại của bạn"
      keyboardType="phone-pad"
    />
  </View>

  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Tiếp tục</Text>
  </TouchableOpacity>
</View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
