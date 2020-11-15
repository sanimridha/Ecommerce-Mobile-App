import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'

import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText'

const AppPicker = ({icon,placeholder, ...otherPros}) => {
    return (
        <View style={styles.container}>
           { icon && <MaterialCommunityIcons name={icon}size={25} style={styles.icons}/>}
            <AppText styles={styles.text}>{placeholder}</AppText>
            <View style={{marginLeft:230}}>
            <MaterialCommunityIcons name="chevron-down" size={25} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10,
    },
    icons:{
        marginRight:10,
    },
    text:{
        flex:1,
    },
    arrow:{

    }
})

export default AppPicker
