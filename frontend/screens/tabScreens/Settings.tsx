import React from 'react';
import auth from '@react-native-firebase/auth';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use the appropriate icon library
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function Settings() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Sign out from the Firebase app
      await auth().signOut();

      // Revoke access so the Google sign-in process is presented next time.
      await GoogleSignin.revokeAccess();
      console.log(
        'Access revoked, user should choose an account on next sign-in',
      );

      // Clear AsyncStorage and navigate to SignInScreen
      await AsyncStorage.clear();
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Icon name="sign-out" size={30} color="#000" />
        <Text style={styles.logoutText}>Logout</Text>
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
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logoutText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
