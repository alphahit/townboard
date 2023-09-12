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
import RetweetModal from '../../components/RetweetModal';

export default function Feed() {
  //const [changeColor, setChangeColor] = useState(['#FEFEFE','#CEFFFC','#FEFEFE' ])
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    console.log('Tweets================================', tweets);
    
    
  });
const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
  const handleRetweet = () => {
    // Implement your retweet logic here
    // ...
    toggleModal();
  };
  const rainbow = [
    '#9400D3',
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
  ];
  const navigation = useNavigation();
  //or
  //const {navigate} = useNavigation();

  //setInterval(setChangeColor(['#CEFFFC','#FEFEFE','#CEFFFC' ]), 1000);

  const GradientBorderTouchableOpacity = ({children, onPress}) => {
    return (
      <LinearGradient
        colors={['#E8DBFF', '#E5FFEE', '#FBFFCF']} // Replace with your desired gradient colors
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{borderRadius: 10, borderWidth: 1}}>
        <TouchableOpacity style={{}} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  const renderFeed = item => {
    return (
      <GradientBorderTouchableOpacity
        onPress={() => {
          console.log(
            '======================================Item',
            JSON.stringify(item),
          );
          navigation.navigate('TweetDetailsScreen', {item});
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: wp(100),
            alignItems: 'center',
            padding: 5,
          }}>
          <TouchableOpacity
            style={{
              height: 45,
              width: 45,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: item?.item?.author?.avatar}} // Pass the URL as the 'uri' property
              style={{
                height: 35,
                width: 35,
                resizeMode: 'contain',
                marginTop: -10,
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              width: wp(100),
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 14}}>
              {item?.item?.author?.name}
            </Text>
            <Text style={{color: 'grey', fontSize: 12}}>
              {' '}
              @{item?.item?.author?.screenName}
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 10}}>
          <Text style={{color: 'black'}}>{item?.item?.fullText}</Text>
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
              {item?.item?.replyCount}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleModal}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="retweet" size={20} color="#000" />
            <Text style={{color: 'black', fontSize: 12}}>
              {' '}
              {item?.item?.retweetCount}
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
              {item?.item?.favoriteCount}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="dislike1" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity >
            <FontAwesome name="share-square" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </GradientBorderTouchableOpacity>

      // <TouchableOpacity style={{ borderWidth: 1, backgroundColor: "white" }}
      //     onPress={() => {
      //         console.log("======================================Item", JSON.stringify(item))
      //     }}
      // >

      // </TouchableOpacity>
    );
  };

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerStyle:{
  //       backgroundColor:"pink"
  //     },
     
  //   });
  // });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {/* <View
        style={{
          height: 55,
          width: wp(100),
          backgroundColor: '#9FFFE0',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 15,
        }}>
        <TouchableOpacity style={{flexDirection: 'row', width: '20%'}}
        onPress={() => navigation.openDrawer()}
        >
          <FontAwesome5
            name="user-astronaut" // Change this to your desired icon name
            size={24}
            color="black" // Change the icon color
            style={{}} // Adjust the icon's position as needed
          />
          <MaterialIcons
            name="verified-user" // Change this to your desired icon name
            size={10}
            color="black" // Change the icon color
            style={{}} // Adjust the icon's position as needed
          />
        </TouchableOpacity>

          <Text style={{color: 'black', fontSize: 20, width: '60%', textAlign:"center"}}>Feed</Text>
       
        <TouchableOpacity style={{width: '20%', height:"100%", alignItems: 'center', justifyContent:"center"}}>
          <MaterialCommunityIcons
            name="theme-light-dark" // Change this to your desired icon name
            size={24}
            color="black" // Change the icon color
            style={{ marginRight:-10}} // Adjust the icon's position as needed
          />
        </TouchableOpacity>
      </View> */}
      <RetweetModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onRetweet={handleRetweet}
      />
      <View style={{}}>
        <FlatList
          data={tweets}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={renderFeed}
        />
      </View>
      {/*  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DDD',
  },
});
