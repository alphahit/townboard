import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use the appropriate icon library
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Settings() {
  const navigation = useNavigation();

  const handleLogout = async() => {
    // Implement your logout logic here
    await AsyncStorage.clear();
    navigation.navigate('SignInScreen')
  };

  return (
    <View style={styles.container}>
    

    <TouchableOpacity onPress={handleLogout} style={{flexDirection:'row'}}>
    <Icon name="sign-out" size={30}  color="#000"/>
    <Text style={{fontSize:20, color:'black', fontWeight:'bold', }}>Logout</Text>

      
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    marginRight: 8,
  },
});