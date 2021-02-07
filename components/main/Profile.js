<<<<<<< HEAD
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
//
// })
export default Profile
=======
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
>>>>>>> cf655e0c3e810776603fb322fe5d6c8bed233b52
