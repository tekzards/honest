// import React from 'react'
// import { View, Text } from "react-native";

// export default function Profile() {
//     return (
//         <View>
//             <Text>{currentUser.name}</Text>
//             <Text>{currentUser.email}</Text>
//         </View>
//     )
// }

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
// const mapStateToProps = (store) => ({
//     currentUSer: store.userState.currentUSer
// })
export default connect(mapStateToProps, null)(Profile);