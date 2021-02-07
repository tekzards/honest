import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';

export default function Logo() {
  return (
       <View style={styles.logo}>
          <Text>
              <BrandingWatermarkIcon />
          </Text>
        </View>   
  );
}

const styles = StyleSheet.create({
  logo: {
    border: '1px solid #fff',
  },
});