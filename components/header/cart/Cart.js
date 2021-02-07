import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function Cart() {
  return (
       <View style={styles.cart}>
          <Text>
              <ShoppingBasketIcon />
          </Text>
        </View>   
  );
}

const styles = StyleSheet.create({
  cart: {
    border: '1px solid #fff',
  },
});
