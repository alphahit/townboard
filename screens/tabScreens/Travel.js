import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  TextInput,
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

export const Travel = () => {
  const navigation = useNavigation();
  const [countries, setCountries] = useState([
    {
      id: 1,
      name: 'India',
      states: ['Maharashtra', 'Uttar Pradesh', 'Karnataka'],
      img: require('../../assets/images/country/india.jpg'),
      iso2: "IN"
    },
    
    {
      id: 2,
      name: 'Canada',
      states: ['Ontario', 'Quebec', 'British Columbia'],
      img: require('../../assets/images/country/canada.jpg'),
      iso2: "CA"
    },
    {
      id: 3,
      name: 'Australia',
      states: ['New South Wales', 'Victoria', 'Queensland'],
      img: require('../../assets/images/country/australia.jpg'),
      iso2: "AU"
    },
    {
      id: 4,
      name: 'Germany',
      states: ['Berlin', 'Bavaria', 'Hamburg'],
      img: require('../../assets/images/country/germany.jpeg'),
      iso2: "DE"
    },
    {
      id: 5,
      name: 'USA',
      states: ['California', 'New York', 'Texas'],
      img: require('../../assets/images/country/usa.png'),
      iso2: "US"
    },
    
  ]);

  const [newCountry, setNewCountry] = useState('');
  const [newState, setNewState] = useState('');

  const addCountry = () => {
    const newId = countries.length + 1;
    setCountries([...countries, {id: newId, name: newCountry, states: []}]);
    setNewCountry('');
  };

  const addStateToCountry = countryIndex => {
    const updatedCountries = [...countries];
    updatedCountries[countryIndex].states.push(newState);
    setCountries(updatedCountries);
    setNewState('');
  };

  const deleteCountry = countryIndex => {
    const updatedCountries = countries.filter(
      country => country.id !== countryIndex,
    );
    setCountries(updatedCountries);
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
   
      

      <TouchableOpacity
        onPress={addCountry}
        style={{
          backgroundColor: '#E8FFFA',
          alignItems: 'center',
          justifyContent: 'center',
          height:40,
          width:wp(100)
        }}>
        <Text style={{color: 'black', fontSize: 14}}>Add New Country</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Enter Country Name"
        value={newCountry}
        onChangeText={text => setNewCountry(text)}
        style={{color: 'black', fontSize:14, borderWidth:1, borderRadius:5, padding:5, borderColor:"#9FFFE0"}}
        placeholderTextColor={"grey"}
      />

      <FlatList
        data={countries}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity style={{width:wp(50), alignItems:'center'}}
          onPress={() => {
            navigation.navigate('CountryDetails', {countryCode: item.iso2, countryImage: item.img})
          }}
          >
          <View style={{borderRadius:10, borderWidth:1, marginTop:10,width: 162, borderColor:"#9FFFE0"}}>
            <Text style={{color: 'black', fontSize: 14, width:'100%',textAlign:'center'}} >{item.name.toUpperCase()}</Text>
            <Image
              style={{width: 160, height: 90}}
              resizeMode="stretch"
              source={item.img}
            />

            <TouchableOpacity
              onPress={() => addStateToCountry(item.id - 1)}
              style={{
                backgroundColor: '#E8FFFA',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 14}}>Add State</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Enter State Name"
              value={newState}
              onChangeText={text => setNewState(text)}
              style={{color: 'black', fontSize:14, borderWidth:1, borderRadius:2,borderColor:"grey", height:20, padding:0, paddingLeft:2, width:"80%", alignSelf:'center'}}
              placeholderTextColor={"lightgrey"}
            />
          
            <FlatList
              data={item.states}
              keyExtractor={state => state}
              renderItem={({item: state, index}) => (
                <Text style={{color: 'black', fontSize: 14}} key={index}>
                  {state}
                </Text>
              )}
              style={{marginVertical:5, paddingLeft:2}}
            />
            <TouchableOpacity
              onPress={() => deleteCountry(item.id)}
              style={{
                backgroundColor: '#E8FFFA',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomStartRadius:10,
                borderBottomEndRadius:10
              }}>
              <Text style={{color: 'black', fontSize: 14, }}>
            
                Delete Country
              </Text>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
