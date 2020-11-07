import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText'
import{MaterialIcons} from '@expo/vector-icons'
import AppButton from './app/components/AppButton';


export default function App() {

   return(
    //    <View style={{
    //        flex:1,
    //        justifyContent:"center",
    //        alignItems:"center",
    //         }}
    //     >

    //        {/* <Text style={{
    //            fontSize:30,
    //            fontFamily:"Roboto",
    //             color:"orange",
    //             textDecorationLine:"underline",
    //             textAlign:"center",
    //             lineHeight:60,

    //        }}>
    //             I Love React Native, here is some more texts,, here i'm writing some more..and more..
    //        </Text> */}
    //        <MaterialIcons name="email" size={200} color="dodgerblue" />
    //        <AppText>Mail App</AppText>
    //        <AppButton title="LogIn" onPress={()=> console.log("tapped!")}/>

    //    </View>
         <WelcomeScreen/>
    );
}


