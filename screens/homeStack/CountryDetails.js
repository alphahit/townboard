import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
const CountryDetails = () => {


//   useEffect(() => {
//     var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "UWp2WnNUQ1pRbjlDd1JSSVRNclpqWW9KVFRPOUhoT01IQWRORHppdQ==");

// var requestOptions = {
//  method: 'GET',
//  headers: headers,
//  redirect: 'follow'
// };

// const res = fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));
//   },[])

const route = useRoute();


useEffect(() => {
  console.log("Route params " + JSON.stringify(route.params) )
  const fetchData = async () => {
    const apiKey = "UWp2WnNUQ1pRbjlDd1JSSVRNclpqWW9KVFRPOUhoT01IQWRORHppdQ==";
    const url = `https://api.countrystatecity.in/v1/countries/${route.params.countryCode}/states`;

    try {
      const response = await axios.get(url, {
        headers: {
          "X-CSCAPI-KEY": apiKey,
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('error', error);
    }
  };

  fetchData();
}, []);



  return (
    <View style={{ flex: 1 }}>
      {/* <Image
        source={country.img}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      /> */}
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>India</Text>
        <Text style={{ fontSize: 16 }}>States:</Text>
       
      </View>
    </View>
  );
};

export default CountryDetails;