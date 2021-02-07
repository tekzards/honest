import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo/Logo';
import Cart from "./Cart/Cart"
import SearchBar from "./SearchBar/SearchBar"
export default function Header() {
  return (
        <View style={styles.header}>
          <Logo />
          <SearchBar />
          <Cart />
        </View>   
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10
  },
});