import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { supabase } from './supabaseClient';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bem-vindo ao aplicativo!</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  greeting: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
