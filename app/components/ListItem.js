import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({title, subTitle, image, onPress, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
        underlayColor={Colors.light}
        onPress={onPress}
        >
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding:10,
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