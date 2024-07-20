import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './LoginStyle'

export const LoginScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Login</Text>
            <TextInput style={ styles.input } placeholder='Email' value=''/>
            <TextInput style={ styles.input } placeholder='Password' value=''/>
            <Button title='Login'/>
        </View>
    )
}