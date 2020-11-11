import React, {useState} from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import Screen from '../components/Screen'
import ListItemSeparetor from '../components/ListItemSeparetor'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages=[
    {
        id: 1,
        title:'T1',
        description:'D1',
        image:require('../assets/Sani.jpg'),
    },
    {
        id: 2,
        title:'T2',
        description:'D2',
        image:require('../assets/sani3.png'),
    },
    {
        id: 3,
        title:'T3',
        description:'D3',
        image:require('../assets/sani3.png'),
    }
]

const MessagesScreen = () => {
    const[messages, setMessages]= useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = message =>{
        //delete the message from messages
        setMessages( messages.filter((m) => m.id !==message.id));
    };
    return (
        <Screen>
        <FlatList
            data={messages}
            keyExtractor={message=>message.id.toString()}
            renderItem={({item}) =>
            <ListItem
                title ={item.title}
                subTitle={item.description}
                image={item.image}
                onPress = {()=>console.log("message deleverd!", item)}
                renderRightActions={()=>
                    <ListItemDeleteAction onPress ={ () => handleDelete(item)}/>}

            />}
            ItemSeparatorComponent = {ListItemSeparetor}
            refreshing={refreshing}
            onRefresh={()=>{
                setMessages([
                    {
                        id: 3,
                        title:'T3',
                        description:'D3',
                        image:require('../assets/sani3.png'),
                    },
                ])
            }}

        />
        </Screen>
    )
}


const styles = StyleSheet.create({

    screen:{
        padding: Constants.statusBarHeight
    }
})

export default MessagesScreen