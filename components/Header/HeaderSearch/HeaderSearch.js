import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function HeaderSearch() {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
      <View style={styles.SearchBlock}>
        
        <TextInput
      style={{ height: 40, borderRadius: 10, backgroundColor:"#f6f6f6a1", padding:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    SearchBlock: {
      
      backgroundColor: '#fff',
      display:"inline-block",
      textAlign:"center"
      
      
    },
  });