import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
  Platform,
  UIManager,
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
import React from 'react';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const TweetContent = ({
  comments,
  setComments,
  commentBoxopen,
  setcommentBoxopen,
}) => {
  const toggleCommentBoxAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setcommentBoxopen(!commentBoxopen);
  };
  const route = useRoute();
  const renderComments = (items, index) => {
    console.log('Items In Comments =====>', items);
    console.log(
      'Length of comments =====>',
      params?.item?.item?.positive_comments.length,
    );

    return (
      <View
        style={{
          // marginBottom:
          //   index === params?.item?.item?.positive_comments.length - 1
          //     ? 200
          //     : 0,
          marginTop: -20,
          paddingBottom: 20,
          marginBottom: 0,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 14,

            transform: [{rotate: '350deg'}],

            marginLeft: 10,
            marginTop: 30,
          }}>
          {items?.item?.user_name}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            padding: 15,
            backgroundColor: '#9FFFE0',
            borderRadius: 15,
            transform: [{rotate: '350deg'}],
            width: '95%',
            marginTop: 5,
            alignSelf: 'center',
          }}>
          {items?.item?.comment_text}
        </Text>
      </View>
    );
  };

  const {params} = route;
  useEffect(() => {
    console.log(
      'Prop ITEM Passed ===========>',
      JSON.stringify(params?.item?.item?.id),
    );
  }, []);
  return (
    <View style={{alignItems: 'center', height: '100%'}}>
      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          backgroundColor: 'white',
          alignSelf: 'center',
          marginHorizontal: wp(2),
        }}
        // sharedTransitionTag={`post-${params?.item?.item?.id}`}
        >
        <Text style={{color: 'black'}}>{params?.item?.item?.fullText}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',

          alignItems: 'center',
          marginBottom: 10,
          width: '100%',
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

      <View
        style={{
          borderLeftWidth: 1,
          width: '100%',
          borderStyle: 'dashed',

          borderColor: '#11ebae',

          paddingHorizontal: 10,
        }}>
        <View
          style={{
            backgroundColor: '#11ebae',

            borderRadius: 100,

            height: 10,

            width: 10,

            position: 'absolute',

            left: -5,
          }}
        />

        <TouchableOpacity
          onPress={toggleCommentBoxAccordion}
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',

            paddingRight: 10,

            marginTop: 10,

            alignItems: 'center',
          }}
          activeOpacity={1}>
          <Text
            style={{
              color: 'black',

              fontSize: 16,

              fontWeight: '500',

              paddingLeft: 5,
            }}>
            Add a comment
          </Text>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: 'white',

            borderRadius: 5,

            borderWidth: 1,

            borderColor: '#e2e2e2',

            marginVertical: 10,
          }}>
          {commentBoxopen ? (
            <TextInput
              style={{
                borderWidth: 1,

                padding: 5,
                borderRadius: 5,
                textDecorationLine: 'underline',

                color: 'black',
              }}
              numberOfLines={5}
              textAlignVertical={'top'}
              textBreakStrategy={'highQuality'}
              underlineColorAndroid={'transparent'}
              multiline={true}
              autoCorrect
              onChangeText={setComments}
              value={comments}
            />
          ) : (
            <TouchableOpacity
              onPress={toggleCommentBoxAccordion}
              style={{height: 40, justifyContent: 'center', paddingLeft: 10}}>
              <Text style={{color: 'black', fontSize: 14}}>
                {comments ? comments : 'Write Comment'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {commentBoxopen && comments.length > 0 && (
          <TouchableOpacity
            style={{
              height: 30,
              width: 60,
              backgroundColor: '#00ce61',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', textAlign: 'center', fontSize: 14}}>
              Save
            </Text>
          </TouchableOpacity>
        )}

        <FlatList
          data={params?.item?.item?.positive_comments}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={renderComments}
          style={{height: hp(70), width: '100%'}}
        />
      </View>
    </View>
  );
};
