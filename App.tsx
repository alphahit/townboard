

import type {PropsWithChildren} from 'react';

import {useEffect, useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './Navigation';


import { _signinWithGoogle } from './config/firebase/GoogleSignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SignInScreen } from './screens/signinScreen/SignInScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const [user, setUser] = useState(null);

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const signInWithGoogle = async () => {
    //   try {
    //     await GoogleSignin.hasPlayServices();
    //     const userInfo = await GoogleSignin.signIn();
    //     setUser(userInfo);
    //   } catch (error) {
    //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //       // User cancelled the sign-in process
    //       console.log('Google Sign-In cancelled');
    //     } else if (error.code === statusCodes.IN_PROGRESS) {
    //       // Sign-in is already in progress
    //       console.log('Google Sign-In is already in progress');
    //     } else {
    //       console.error('Google Sign-In error: ', error);
    //     }
    //   }


    _signinWithGoogle().then((data)=>{
        if(!data){
            console.log('<==================================No Data From Google :Error==================================>')
            return
        }
        console.log("Successfully signed using google sign in================================================>",data);
        setUser(data)
       
    })

    await AsyncStorage.setItem('userdata', user?.user?.name);
    };





  return (

    user == null ? <SignInScreen signInWithGoogle={signInWithGoogle}/> : <Navigation/>

  );
}

const styles = StyleSheet.create({
  
});

export default App;
