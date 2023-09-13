import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import {tweets} from '../../data/tweets';
import {Tweet} from '../../components/Tweet';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useLayoutEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
export const SignInScreen = ({signInWithGoogle}) => {
    
  
    // useEffect(() => {
    //   configureGoogleSignIn();
    // }, []);
  
    // const configureGoogleSignIn = async () => {
    //   try {
    //     await GoogleSignin.configure({
    //       scopes: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    //       webClientId: 'YOUR_WEB_CLIENT_ID',
    //       offlineAccess: true,
    //     });
    //   } catch (error) {
    //     console.error('Google Sign-In configuration error: ', error);
    //   }
    // };
  
    
  
    return (
      <SafeAreaView style={styles.container}>
      
          
          
            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={signInWithGoogle}
            />
          
        


      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
