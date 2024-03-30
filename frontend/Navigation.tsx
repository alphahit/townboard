/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {
  NavigationContainer,
  // DrawerActions,
  // useNavigation,
} from '@react-navigation/native';
import Feed from './screens/tabScreens/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Travel} from './screens/tabScreens/Travel';
import Settings from './screens/tabScreens/Settings';
import React, {useContext} from 'react';

// import {createDrawerNavigator} from '@react-navigation/drawer';
// import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
// import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';

// import {
//   Text,
//   SafeAreaView,
//   FlatList,
//   Image,
//   Pressable,
//   StyleSheet,
//   View,
//   TouchableOpacity,
// } from 'react-native';
import {TweetDetailsScreen} from './screens/homeStack/TweetDetailsScreen';
// import {Bookmarks} from './screens/drawerScreens/Bookmarks';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Chat} from './screens/tabScreens/Chat';
// import {Following} from './screens/tabScreens/Following';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
import {SignInScreen} from './screens/signinScreen/SignInScreen';
import CountryDetails from './screens/homeStack/CountryDetails';
import {SplashScreen} from './screens/homeStack/Splash';
import GlobalState, {GlobalContext} from './context';
import {Image} from 'react-native';

const TopTabs = createMaterialTopTabNavigator();
function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={() => ({
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 10,
          backgroundColor: 'red',
        },
      })}>
      <TopTabs.Screen name="main" component={Feed} />
      <TopTabs.Screen name="Chat" component={Chat} />
    </TopTabs.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
      })}>
      <HomeStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="BottomTabGroup"
        component={BottomTabGroup}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="CountryDetails"
        component={CountryDetails}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabGroup() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('GlobalContext must be used within a GlobalState provider');
  }

  const {currentUserName, currentUserPhoto} = context;
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {backgroundColor: '#9FFFE0'},
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          let iconComponent;

          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
            if (currentUserPhoto) {
              iconComponent = (
                <Image
                  source={{uri: currentUserPhoto}}
                  style={{width: size, height: size, borderRadius: size / 2}}
                />
              );
            } else {
              iconComponent = (
                <Ionicons name={iconName} size={size} color={color} />
              );
            }
          } else if (route.name === 'Travel') {
            iconName = focused ? 'airplane' : 'airplane-outline';
            iconComponent = (
              <Ionicons name={iconName} size={size} color={color} />
            );
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
            iconComponent = (
              <Ionicons name={iconName} size={size} color={color} />
            );
          }

          return iconComponent;
        },
      })}>
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{
          headerShown: false,

          tabBarLabel: currentUserName || '@alphahit',
        }}
      />
      <Tab.Screen
        name="Travel"
        component={Travel}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#9FFFE0',
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#9FFFE0',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <GlobalState>
      <NavigationContainer>
        <HomeStackGroup />
      </NavigationContainer>
    </GlobalState>
  );
}
