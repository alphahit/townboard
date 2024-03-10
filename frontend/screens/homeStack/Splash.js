import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {getAxiosReqres} from '../data/AxiosApiReques';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const SplashScreen = () => {
  const [vendors, setvendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  
  const navigation = useNavigation();
  


  useEffect(()=> {


    setTimeout(()=> {
      getToken()
    },1000)
    
   
  }, []);
  const getToken = async() => {
   
    const token = await AsyncStorage.getItem('token')
    if (!token) {
      console.log('Get Token Called False====>',token)
      navigation.replace('SignInScreen')
    }else{
      console.log('Get Token Called True====>',token)
      navigation.replace('BottomTabGroup')
    }
  }


  return (
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:"center", backgroundColor: 'white'}}>
     
     <Image
        style={{width:320, height:180}}
        source={require('../../assets/images/earth.png')}
      />
    </SafeAreaView>
  );
};


