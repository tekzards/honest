import React from 'react'
import { Text, View, Button } from 'react-native'

export default function landing({ navigation }) {
    return (
        <View style = {{ flex: 1, justifyContent: 'center'}}>
            <Button
                title = "Sign Up"
                onPress = {() => navigation.navigate("Signup")} />
            <Button
                title = "Sign In"
                onPress = {() => navigation.navigate("Signin")} />
        </View>
    )
}