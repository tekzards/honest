import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

export default function SearchBar() {
    //const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
       <View style={styles.searchbar}>
          <Text>
                <TextInput style={styles.searchbarInput} placeholder="Location" />
                <LocationSearchingIcon style={{ position: 'absolute', right: 10, top: 9, color: "#b5b5b5", width: 20 }} />
          </Text>
        </View>   
  );
}

const styles = StyleSheet.create({
    searchbar: {
        position: 'relative'
    },
    searchbarInput: {
        borderRadius: 30, 
        padding : '10px', 
        paddingRight: 30,
        border: '1px solid #ddd',
    },
});