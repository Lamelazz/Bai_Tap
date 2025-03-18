import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Thông báo', 'Vui lòng nhập Email và Password');
      return;
    }
    try {
      await AsyncStorage.setItem('userEmail', email);
      Alert.alert('Thành công', 'Đăng nhập thành công!');
  
      // ✅ Chuyển qua Explorer trước, sau đó có thể quay về Account
      navigation.navigate('Main');
      // ✅ Nếu muốn chuyển thẳng sang Account thì thay Explorer bằng Account
      // navigation.navigate('Account');
  
    } catch (error) {
      Alert.alert('Lỗi', 'Lưu email thất bại');
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Tính năng đang phát triển');
  };

  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Tính năng đang phát triển');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email Id</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleLogin}>
          <Icon name="google" size={20} color="#fff" />
          <Text style={styles.socialText}> Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fbBtn} onPress={handleFacebookLogin}>
          <Icon name="facebook" size={20} color="#fff" />
          <Text style={styles.socialText}> Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text>Not yet a member? </Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  label: { fontWeight: 'bold', marginBottom: 5 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 5,
    padding: 12, marginBottom: 15,
  },
  forgot: { alignItems: 'flex-end', marginBottom: 20 },
  forgotText: { color: '#f5a623' },
  signInBtn: {
    backgroundColor: '#f5a623', padding: 15,
    borderRadius: 5, alignItems: 'center', marginBottom: 20
  },
  signInText: { color: '#fff', fontWeight: 'bold' },
  orText: { textAlign: 'center', marginVertical: 15, color: '#555' },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  googleBtn: {
    backgroundColor: '#db4437', padding: 12, borderRadius: 5, flexDirection: 'row', alignItems: 'center'
  },
  fbBtn: {
    backgroundColor: '#3b5998', padding: 12, borderRadius: 5, flexDirection: 'row', alignItems: 'center'
  },
  socialText: { color: '#fff', fontWeight: 'bold', marginLeft: 8 },
  signupContainer: { flexDirection: 'row', justifyContent: 'center' },
  signupText: { color: '#f5a623' }
});
