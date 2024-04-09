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
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tweets} from '../../data/tweets';
// import {Tweet} from '../../components/Tweet';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useLayoutEffect, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import RetweetModal from '../../components/RetweetModal';
import React from 'react';

export default function Feed() {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleRetweet = () => {
    toggleModal();
  };
  // const rainbow = [
  //   '#9400D3',
  //   '#4B0082',
  //   '#0000FF',
  //   '#00FF00',
  //   '#FFFF00',
  //   '#FF7F00',
  //   '#FF0000',
  // ];

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      console.log('Get Token Called False====>', token);
    } else {
      console.log('Get Token Called True====>', token);
    }
  };

  const GradientBorderTouchableOpacity = ({
    children,
    onPress,
  }: {
    children: any;
    onPress: any;
  }) => {
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{scale: scale.value}],
      };
    });

    return (
      <LinearGradient
        colors={['#E8DBFF', '#E5FFEE', '#FBFFCF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{borderRadius: 10, borderWidth: 1}}>
        <Animated.View style={animatedStyle}>
          <TouchableOpacity
            style={{}}
            onPress={onPress}
            onPressIn={() => {
              scale.value = withSpring(0.95);
            }}
            onPressOut={() => {
              scale.value = withSpring(1);
            }}>
            {children}
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    );
  };
  const renderFeed = (item: any) => {
    return (
      <GradientBorderTouchableOpacity
  onPress={() => {
    console.log(
      '======================================Item',
      JSON.stringify(item?.item?.id),
    );
    navigation.navigate('TweetDetailsScreen', {item});
  }}
>
  <Animated.View
    style={styles.animatedView}
    sharedTransitionTag={`post-${item?.item?.id}`}
  >
    <TouchableOpacity style={styles.avatarContainer}>
      <Image
        source={{uri: item?.item?.author?.avatar}} // Pass the URL as the 'uri' property
        style={styles.avatar}
      />
    </TouchableOpacity>

    <View style={styles.authorContainer}>
      <Text style={styles.authorName}>{item?.item?.author?.name}</Text>
    </View>
  </Animated.View>
  <View style={styles.textContent}>
    <Text style={styles.text}>{item?.item?.fullText}</Text>
  </View>

  <View style={styles.actionRow}>
    <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
      <FontAwesome name="comments" size={20} color="#000" />
      <Text style={styles.actionText}> {item?.item?.replyCount}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton} onPress={toggleModal}>
      <FontAwesome name="retweet" size={20} color="#000" />
      <Text style={styles.actionText}> {item?.item?.retweetCount}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
      <AntDesign name="like1" size={20} color="#000" />
      <Text style={styles.actionText}> {item?.item?.favoriteCount}</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {}}>
      <AntDesign name="dislike1" size={20} color="#000" />
    </TouchableOpacity>

    <TouchableOpacity>
      <FontAwesome name="share-square" size={20} color="#000" />
    </TouchableOpacity>
  </View>
</GradientBorderTouchableOpacity>

    );
  };

  useEffect(() => {
    setTimeout(() => {
      getToken();
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DDD',
  },
  animatedView: {
    flexDirection: 'row',
    width: wp('100%'),
    alignItems: 'center',
    padding: 5,
  },
  avatarContainer: {
    height: 45,
    width: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    marginTop: -10,
  },
  authorContainer: {
    flexDirection: 'row',
    width: wp('100%'),
    alignItems: 'center',
  },
  authorName: {
    color: 'black',
    fontSize: 14,
  },
  textContent: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  text: {
    color: 'black',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('100%'),
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: 'black',
    fontSize: 12,
  },
});
