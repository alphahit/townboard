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

// import {tweets} from '../../data/tweets';
// import {Tweet} from '../../components/Tweet';
import {useNavigation} from '@react-navigation/native';
// import {useEffect, useLayoutEffect, useState} from 'react';
// import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
// import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
// import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {_signinWithGoogle} from '../../config/firebase/GoogleSignIn';
import React, {useContext} from 'react';
import {GlobalContext} from '../../context';
export const SignInScreen = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    // handle the case where context is null
    throw new Error('GlobalContext must be used within a GlobalState provider');
  }

  const {setCurrentUserName, setCurrentUser, setCurrentUserPhoto} = context;

  const navigation = useNavigation();

  const signInWithGoogle = async () => {
    const data = await _signinWithGoogle();

    if (!data) {
      console.log(
        '<==================================No Data From Google :Error==================================>',
      );
      return;
    }

    console.log(
      'Successfully signed using google sign in================================================>',
      data,
    );

    if (data?.idToken) {
      const {user} = data;
      console.log('user===>', user);
      setCurrentUserName(user?.name);
      setCurrentUser(user?.id);
      setCurrentUserPhoto(user?.photo);

      await AsyncStorage.setItem('token', data?.idToken);
      navigation.navigate('BottomTabGroup');
    } else {
      // Handle the case where idToken is null or undefined
      console.log('idToken is null or undefined');
    }
  };

  const data = [
    {
      id: 1,
      title: 'CONNECT WITH OTHER PEOPLE',
      url: '../../assets/images/connectpeople.jpg',
    },
    {
      id: 2,
      title: 'CREATE YOUR COMMUNITY',
      url: '../../assets/images/createcommunity.jpg',
    },
    {
      id: 3,
      title: 'FIND NEW FRIENDS',
      url: '../../assets/images/findfriends.jpg',
    },
    // Add more items as needed
  ];

  const renderItem = ({item}: {item: any}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          height: hp(50),
          backgroundColor: 'white',
          width: '100%',
          borderTopEndRadius: 20,
          borderTopLeftRadius: 20,
          borderWidth: 2,
          borderColor: '#00CE61',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          {item.title}
        </Text>
        <Image
          source={
            item?.id == 1
              ? require('../../assets/images/connectpeople.jpg')
              : item?.id == 2
              ? require('../../assets/images/createcommunity.jpg')
              : require('../../assets/images/findfriends.jpg')
          }
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Earthling !!</Text>
      <Image
        source={require('../../assets/images/Townhall.png')}
        style={styles.earthImage}
      />

      <GoogleSigninButton
        style={styles.googleSignInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signInWithGoogle}
      />

      <Carousel
        style={styles.carouselContainer}
        data={data}
        renderItem={renderItem}
        sliderWidth={wp(100)} // Set the width of the carousel
        itemWidth={wp(100)} // Set the width of each item in the carousel
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Add this for vertical spacing
    backgroundColor: '#9FFFE0',
    paddingTop: hp(10), // Add some vertical padding
  },
  welcomeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  earthImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  googleSignInButton: {
    width: wp(60),
    height: 50,
    borderRadius: 10,
    shadowColor: '#000', // Add shadow for depth
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  carouselContainer: {
    height: hp(50),
    backgroundColor: 'white',
    width: '100%',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 2,
    borderColor: '#00CE61',
    position: 'absolute',
    bottom: 0,
  },
  carouselImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
