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
import Carousel from 'react-native-snap-carousel';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
// import Image1 from '../../assets/images/connectpeople.jpg';
// import Image2 from '../../assets/images/createcommunity.jpg';
// import Image3 from '../../assets/images/findfriends.jpg';
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
    const data = [
      { id: 1, title: 'CONNECT WITH OTHER PEOPLE', url: '../../assets/images/connectpeople.jpg',   },
      { id: 2, title: 'CREATE YOUR COMMUNITY' ,url: '../../assets/images/createcommunity.jpg', },
      { id: 3, title: 'FIND NEW FRIENDS',url: '../../assets/images/findfriends.jpg',  },
      // Add more items as needed
    ];


    const renderItem = ({ item }) => {
      return (
        <View style={{
          alignItems: 'center',

          position:"absolute", bottom:0, height:hp(50), backgroundColor:"white", width:"100%", borderTopEndRadius:20, borderTopLeftRadius:20, borderWidth:2, borderColor:"#00CE61"
        }}>
          <Text style={{color:"black", color:"black", fontSize:20, fontWeight:"bold", marginTop:20}} >{item.title}</Text>
          <Image
                source={ item?.id == 1 ? require('../../assets/images/connectpeople.jpg') : item?.id == 2 ? require('../../assets/images/createcommunity.jpg') :require('../../assets/images/findfriends.jpg')  } 
                style={{
                  width:300,
                  height:300,
                  resizeMode: 'contain',
                
                }}
              />
        </View>
      );
    };
     
  
    return (
      <SafeAreaView style={styles.container}>
      
          
          <View style={{marginTop:hp(7.5)}}>
            <Text style={{color:"black", fontWeight:"bold", fontSize:20, textAlign:"center" }}>
              Welcome Earthling !!
            </Text>
            <Image
                source={require("../../assets/images/Townhall.png")} // Pass the URL as the 'uri' property
                style={{
                  width:200,
                  height:200,
                  resizeMode: 'contain',
                
                }}
              />
        
            <GoogleSigninButton
              style={{ width: 192, height: 48, borderRadius:10 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={signInWithGoogle}
            />
            </View>
        

<Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={wp(100)} // Set the width of the carousel
      itemWidth={wp(100)}   // Set the width of each item in the carousel
    />


      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:"#9FFFE0"
    },
    
  });
  
