import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

const Screen = ({children}) => {
    return (
    <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight
    }
})

export default Screen