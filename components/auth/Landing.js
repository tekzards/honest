<<<<<<< HEAD
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
=======
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
>>>>>>> cf655e0c3e810776603fb322fe5d6c8bed233b52
}