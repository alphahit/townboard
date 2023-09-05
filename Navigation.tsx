import {NavigationContainer} from '@react-navigation/native';
import Feed from './screens/tabScreens/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Notifications} from './screens/tabScreens/Notifications';
import {Settings} from './screens/tabScreens/Settings';
import { createDrawerNavigator } from '@react-navigation/drawer';
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

const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator
      screenOptions={({route, navigation}) => ({
        //headerShown: route.name == "Feed" ? true : false
        headerShown: false
      })}>
      <HomeStack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: '#9FFFE0', // Specify the height of your custom header
          // },
          // headerTitle: props => (
          //   <View style={{alignItems: 'center'}}>
          //     <Text
          //       style={{alignItems: 'center', color: 'black', fontSize: 20}}>
          //       Feed
          //     </Text>
          //   </View>
          // ),
          // headerRight: () => (
          //   <MaterialCommunityIcons
          //     name="theme-light-dark" // Change this to your desired icon name
          //     size={24}
          //     color="black" // Change the icon color
          //     style={{}} // Adjust the icon's position as needed
          //   />
          // ),
          // headerLeft: () => (
          //   <View style={{flexDirection: 'row'}}>
          //     <FontAwesome5
          //       name="user-astronaut" // Change this to your desired icon name
          //       size={24}
          //       color="black" // Change the icon color
          //       style={{}} // Adjust the icon's position as needed
          //     />
          //     <MaterialIcons
          //       name="verified-user" // Change this to your desired icon name
          //       size={10}
          //       color="black" // Change the icon color
          //       style={{marginRight: 10}} // Adjust the icon's position as needed
          //     />
          //   </View>
          // ),
        }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{
          headerShown: true,
          presentation: "fullScreenModal"
        }}
      />
    </HomeStack.Navigator>
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
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        // headerStyle:{
        //   backgroundColor:"red"
        // },
        tabBarStyle: {backgroundColor: '#9FFFE0'},
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if (route.name === 'HomeStackGroup') {
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
        name="HomeStackGroup"
        component={HomeStackGroup}
        // options={{
        //     tabBarIcon: () => <Ionicons name = "home" size={24} color="#000"/>
        // }}

        options={{
          headerShown: false,
          tabBarLabel: '@alphahit',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        // options={{
        //     tabBarIcon: () => <Ionicons name = "home" size={24} color="#000"/>
        // }}
        options={{
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
          headerStyle: {
            backgroundColor: '#9FFFE0', // Specify the height of your custom header
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
