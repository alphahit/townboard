import React, {useContext, useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  // FlatList,
  // Image,
  // Pressable,
  // StyleSheet,
  // View,
  // TouchableOpacity,
  // Button,
  // TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {SvgXml} from 'react-native-svg';
import searchSvg from '../../assets/svg/search.svg';
import plusSvg from '../../assets/svg/plus.svg';

import { GlobalContext } from '../../context';
import CreateGroupModal from '../../components/CreateModal';
// import {tweets} from '../../data/tweets';
// import {Tweet} from '../../components/Tweet';
// import {useNavigation} from '@react-navigation/native';
// import {useEffect, useLayoutEffect, useState} from 'react';
// import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
// import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
// import AntDesign from 'react-native-vector-icons/dist/AntDesign';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

export const Chat = () => {
  const [text, onChangeText] = useState('');
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('GlobalContext must be used within a GlobalState provider');
  }
const {allChatRooms, setAllChatRooms, modalVisible, setModalVisible} = context
  const GradientView = ({children}: {children: any}) => {
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{scale: scale.value}],
      };
    });

    return (
      <LinearGradient
        colors={['#03A9F1', '#6F3689', '#A0025A']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{flex: 1}}>
        <Animated.View>{children}</Animated.View>
      </LinearGradient>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <GradientView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search..."
          />
          <View style={styles.searchContainer}>
            <SvgXml width="20" height="20" xml={searchSvg} />
          </View>
          <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={styles.plusContainer}>
            <SvgXml width="20" height="20" xml={plusSvg} />
          </TouchableOpacity>
        </View>
      </GradientView>
      {modalVisible && <CreateGroupModal/>}

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#565E70',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  plusContainer: {backgroundColor: '#03A9F1',
  height: 40,
  width: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,}
});
