import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText'
import{MaterialIcons} from '@expo/vector-icons'
import AppButton from './app/components/AppButton';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';


export default function App() {
    const [firstName, setFirstName] = useState("");
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
         //<WelcomeScreen/>
                                   //Card Component
     //     <View style={{
     //          backgroundColor:"#f8f4f4",
     //          padding:20,
     //          paddingTop:80,

     //     }}>
     //          <Card
     //                title="Red Jacket for Sale"
     //                subTitle="$100"
     //                image={require("./app/assets/jacket.jpg")}
     //           />
     //           <Card
     //                title="Red Jacket for Sale"
     //                subTitle="$100"
     //                image={require("./app/assets/couch.jpg")}
     //           />
     //           <Card
     //                title="Red Jacket for Sale"
     //                subTitle="$100"
     //                image={require("./app/assets/jacket.jpg")}
     //           />
     //           <Card
     //                title="Red Jacket for Sale"
     //                subTitle="$100"
     //                image={require("./app/assets/couch.jpg")}
     //           />
     //     </View>
     //<ListingDetailsScreen/>
      //<MessagesScreen/>
     //<ListingDetailsScreen/>
     //<ViewImageScreen/>
    // <Screen>
    //    <AccountScreen/>
    // </Screen>
    // <ListingsScreen/>
    <Screen>
        {/* <Text>{firstName}</Text>

        <TextInput keyboardType="numeric" onChangeText={(text) => setFirstName(text)} placeholder="First Name" style={{
            borderBottomColor:"#ccc",
            borderBottomWidth:1,
        }}/> */}
        <AppTextInput placeholder="Username" icon="email"/>
    </Screen>

    );
}


