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

export default Restaurant