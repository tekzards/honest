import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { connect } from "react-redux";

function Profile(props) {
    const { currentUSer } = props;
    return (
        <View style={styles.container}>
            <Text>{currentUSer.name}</Text>
            <Text>{currentUSer.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    }
})
const mapStateToProps = (store) => ({
    currentUSer: store.userState.currentUSer.
    posts
})
export default connect(mapStateToProps, null)(Profile);