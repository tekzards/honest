import React from 'react'
import { View, TextInput, Image } from "react-native";

export default function Save(props) {
    console.log(props.route.params.image)
    return (
        <View style={{flex : 1}}>
            <Image source={{uri: props.route.params.image}} />
            <TextInput
                placeholder="Write a Caption"
            />
        </View>
    )
}