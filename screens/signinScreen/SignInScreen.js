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
import { _signinWithGoogle } from '../../config/firebase/GoogleSignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignInScreen = () => {
    const [user, setUser] = useState(null);
  
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
  
    const signInWithGoogle = async () => {
    //   try {
    //     await GoogleSignin.hasPlayServices();
    //     const userInfo = await GoogleSignin.signIn();
    //     setUser(userInfo);
    //   } catch (error) {
    //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //       // User cancelled the sign-in process
    //       console.log('Google Sign-In cancelled');
    //     } else if (error.code === statusCodes.IN_PROGRESS) {
    //       // Sign-in is already in progress
    //       console.log('Google Sign-In is already in progress');
    //     } else {
    //       console.error('Google Sign-In error: ', error);
    //     }
    //   }


    _signinWithGoogle().then((data)=>{
        if(!data){
            console('<==================================No Data From Google :Error==================================>')
            return
        }
        console.log("Successfully signed using google sign in================================================>",data);
        setUser(data)
       
    })

    await AsyncStorage.setItem('userdata', user.user.name);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        {user ? (
          <View>
            <Text>Welcome, {user.user.name}</Text>
            <Text>Email: {user.user.email}</Text>
          </View>
        ) : (
          <View>
          
            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={signInWithGoogle}
            />
          </View>
        )}


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
  
