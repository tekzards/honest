<<<<<<< HEAD
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

const Restaurant = ({ navigation }) => {
    return (
        <SafeAreaView>
        <View>
            <Text 
             onPress = {() => {
                 navigation.navigate("Main")
             }}
            >Back</Text>
        </View>
        <View>
            <Text>Restaurant</Text>
        </View>
        </SafeAreaView>
    )
}

=======
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

const Restaurant = ({ navigation }) => {
    return (
        <SafeAreaView>
        <View>
            <Text 
             onPress = {() => {
                 navigation.navigate("Main")
             }}
            >Back</Text>
        </View>
        <View>
            <Text>Restaurant</Text>
        </View>
        </SafeAreaView>
    )
}

>>>>>>> cf655e0c3e810776603fb322fe5d6c8bed233b52
export default Restaurant