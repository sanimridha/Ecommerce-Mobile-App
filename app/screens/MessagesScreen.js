import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import Screen from '../components/Screen'

const messages=[
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
            />}
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