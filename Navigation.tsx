import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import Feed from './screens/tabScreens/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Notifications} from './screens/tabScreens/Notifications';
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
import {Topics} from './screens/tabScreens/Topics';
import {Following} from './screens/tabScreens/Following';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SignInScreen } from './screens/signinScreen/SignInScreen';

const TopTabs = createMaterialTopTabNavigator();
function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={() => ({
        // headerShow: true,
        tabBarLabelStyle:{
          textTransform: 'capitalize',
          fontWeight:"bold",},
          tabBarIndicatorStyle:{
            height:5,
            borderRadius:10,
            backgroundColor:"red"
          }
        
      })}>
      <TopTabs.Screen name="main" component={Feed} />
      <TopTabs.Screen name="Topics" component={Topics} />
      <TopTabs.Screen name="Following" component={Following} />
    </TopTabs.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator
      screenOptions={({route, navigation}) => ({
        //headerShown: route.name == "Feed" ? true : false
        headerShown: false,
      })}>
       
      <HomeStack.Screen
        name="BottomTabGroup"
        component={BottomTabGroup}
        options={{
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: '#9FFFE0',
          // },
        }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
        }}
      />
    </HomeStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        headerShown: route.name === 'HomeStackGroup' ? false : true,
        headerTitle: () => (
          <View style={{width: wp(80)}}>
            <FontAwesome5
              name="user-astronaut" // Change this to your desired icon name
              size={24}
              color="black" // Change the icon color
              style={{marginLeft: '37%'}} // Adjust the icon's position as needed
            />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons
              name="theme-light-dark" // Change this to your desired icon name
              size={24}
              color="black" // Change the icon color
              style={{}} // Adjust the icon's position as needed
            />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen
        name="Home"
        component={HomeStackGroup}
        options={{
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
}

//Tab Bottom
const Tab = createBottomTabNavigator();
// const tabBarOptions = {
//     // activeTintColor: 'blue', // Change the color of the active tab
//     // inactiveTintColor: 'gray', // Change the color of inactive tabs
//     style: {
//       backgroundColor: 'lightgray', // Change the background color of the tab bar
//     },
//   };
function BottomTabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        // headerShown: route.name === 'Feed' ? true : false,
        headerShown: true,
        // headerStyle:{
        //   backgroundColor:"red"
        // },
        tabBarStyle: {backgroundColor: '#9FFFE0'},
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',

        // tabBarOptions:{tabBarOptions}
      })}>
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        // options={{
        //     tabBarIcon: () => <Ionicons name = "home" size={24} color="#000"/>
        // }}

        options={{
          headerShown: false,

          tabBarLabel: '@alphahit',
          // headerStyle:{
          //   //backgroundColor:"red"
          // },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        // options={{
        //     tabBarIcon: () => <Ionicons name = "home" size={24} color="#000"/>
        // }}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#9FFFE0', // Specify the height of your custom header
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        // options={{
        //     tabBarIcon: () => <Ionicons name = "settings" size={24} color="#000"/>
        // }}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#9FFFE0', // Specify the height of your custom header
          },
        }}
      />
    </Tab.Navigator>
  );
}
const getData = async () => {
  try {
    const user = await AsyncStorage.getItem('userdata');
    if (user !== null) {
      await AsyncStorage.setItem('userdata', '');
    }
  } catch (e) {
    // error reading value
  }
};
export default function Navigation() {
  
 
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}
