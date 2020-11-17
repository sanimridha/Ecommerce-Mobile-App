import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'

const ErrorMessage = ({error}) => {
    if(!error) return null;
    return (
    <AppText style={styles.text}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'red',
    }
})

export default ErrorMessage