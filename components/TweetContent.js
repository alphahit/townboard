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

import {useNavigation} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useRoute} from '@react-navigation/native';
export const TweetContent = () => {
  const route = useRoute();
  const {params} = route;
  useEffect(() => {
    console.log('Prop ITEM Passed ===========>', JSON.stringify(params?.item));
  });
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          alignItems: 'center',
          padding: 5,
          marginLeft: 15,
        }}>
        {/* <TouchableOpacity  style={{ height: 45, width: 45, borderRadius:50, alignItems:'center', justifyContent:"center" }}>
                    <Image
                        source={{ uri: params?.item?.item?.author?.avatar }} // Pass the URL as the 'uri' property
                        style={{ height: 35, width: 35, resizeMode: "contain", marginTop:-10 }}
                    />
                    </TouchableOpacity> */}

        {/* <View style={{ flexDirection: "row", width: wp(100), alignItems: "center",  }}>
                        <Text style={{ color: "black", fontSize: 14, }}>{params?.item?.item?.author?.name}</Text>
                        <Text style={{ color: "grey", fontSize: 12, }}>  @{params?.item?.item?.author?.screenName}</Text>
                    </View> */}
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 20, marginTop:10, borderWidth:1, padding:10, borderRadius:5}}>
        <Text style={{color: 'black'}}>{params?.item?.item?.fullText}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: wp(100),
          alignItems: 'center',
          marginBottom: 10,
          // borderWidth:1
        }}>
        <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="comments" size={20} color="#000" />
            <Text style={{color: 'black', fontSize: 12}}>
              {' '}
              {params?.item?.item?.replyCount}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="retweet" size={20} color="#000" />
            <Text style={{color: 'black', fontSize: 12}}>
              {' '}
              {params?.item?.item?.retweetCount}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign name="like1" size={20} color="#000" />
            <Text style={{color: 'black', fontSize: 12}}>
              {' '}
              {params?.item?.item?.favoriteCount}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="dislike1" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="share-square" size={20} color="#000" />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
