import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'

const ListItem = ({title, subTitle, image}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    image:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:10,
    },
    title:{
        fontWeight:"500",
        fontSize:16,
    },
    subTitle:{
        color:colors.medium,
        fontSize:14,
    }
})

export default ListItem