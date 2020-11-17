import React, {useState} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

import {Formik} from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("password")
});

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <Formik
                initialValues={{email:'', password:''}}
                onSubmit={values => console.log(values)}
                validationSchema = {validationSchema}
            >
                {({handleChange, handleSubmit, errors}) =>
                    <React.Fragment>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppText style={{color:"red"}}>{errors.email}</AppText>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="password"
                            textContentType="password"
                            secureTextEntry
                        />
                        <AppText style={{color:"red"}}>{errors.password}</AppText>
                        <AppButton title="Login" onPress={handleSubmit}/>
                    </React.Fragment>
                }
            </Formik>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20,
    }
})

export default LoginScreen