import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import Feed from './screens/tabScreens/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Travel} from './screens/tabScreens/Travel';
import {Settings} from './screens/tabScreens/Settings';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';

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
import {TweetDetailsScreen} from './screens/homeStack/TweetDetailsScreen';
import {Bookmarks} from './screens/drawerScreens/Bookmarks';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Chat} from './screens/tabScreens/Chat';
import {Following} from './screens/tabScreens/Following';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SignInScreen} from './screens/signinScreen/SignInScreen';
import CountryDetails from './screens/homeStack/CountryDetails';
import { SplashScreen } from './screens/homeStack/Splash';

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
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,

        tabBarStyle: {backgroundColor: '#9FFFE0'},
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Travel') {
            iconName = focused ? 'airplane' : 'airplane-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{
          headerShown: false,

          tabBarLabel: '@alphahit',
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
// const getData = async () => {
//   try {
//     const user = await AsyncStorage.getItem('userdata');
//     if (user !== null) {
//       await AsyncStorage.setItem('userdata', '');
//     }
//   } catch (e) {}
// };
export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStackGroup/>
    </NavigationContainer>
  );
}
