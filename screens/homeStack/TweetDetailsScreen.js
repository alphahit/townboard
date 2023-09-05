import {
    Text, 
    SafeAreaView,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { useRoute } from '@react-navigation/native';
import { TweetContent } from '../../components/TweetContent';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

export const TweetDetailsScreen = () => {
      
    
    const navigation = useNavigation();
    const GradientBorderTouchableOpacity = ({ children, onPress }) => {
        return (
            <LinearGradient
                colors={['#F7E3FF', '#E195FF']} // Replace with your desired gradient colors
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 100, borderWidth: 1, padding:5, alignItems: 'center',justifyContent:"center", height:45, width:45, marginLeft:5 }}

            >
                <TouchableOpacity
                    style={{}}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </LinearGradient>
        );
    };
    
    useLayoutEffect(() => {
        navigation.setOptions(
            {   
                headerStyle: {
                    backgroundColor:"#9FFFE0", // Specify the height of your custom header
                    
                   },
               headerTitle: ` ${params?.item?.item?.author?.name}`,
               headerRight:()=>(
               
               <View style={{backgroundColor:"white", borderRadius:5, padding:5, alignItems:"center", justifyContent:"center"}}>
               <Text style={{color:"black"}}>
                @{params?.item?.item?.author?.screenName}
               </Text>
               </View>
               
               ) ,
                headerLeft: () => (
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity onPress={()=>{
                            navigation.goBack()
                        }}>
                        <MaterialIcons name="arrow-back-ios-new" size={20} color="#000" />
                  
                        </TouchableOpacity>




                        <GradientBorderTouchableOpacity
                onPress={() => {
                    console.log("======================================Item", JSON.stringify(item))
                    //navigation.navigate("TweetDetailsScreen",{item});
                }}
                style={{  flexDirection:"row",padding:10 }}
            >

<Image
                        source={{ uri: params?.item?.item?.author?.avatar }} // Pass the URL as the 'uri' property
                        style={{ height: 35, width: 35, resizeMode: "contain", marginTop:-10 }}
                    />
                 

            </GradientBorderTouchableOpacity>
        
                       
                  
                  
                    </View>
                  
                ),
                //headerCenter: () => (<Text style={{color:"black"}}>Test</Text>)
                //headerShown: false
            }
        )
    })
    const route = useRoute()
    const {params} = route
    useEffect(() => {
        console.log("Prop ITEM Passed ===========>", JSON.stringify(params));
    })
return(
    <SafeAreaView>
        <TweetContent tweet = {params.item} />
    </SafeAreaView>
)
}