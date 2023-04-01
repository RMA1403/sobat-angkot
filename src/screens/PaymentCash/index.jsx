import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import NewInput from '../../components/NewInput';
import theme from '../../constants/theme.style';
import { useState } from 'react';
import { Dimensions } from 'react-native';

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export default function PaymentCash(props) {
  let info;
  let gambar;
  if (props.success) {
    info = 'Payment successful!';
    gambar = require('../../../assets/success.png');
  } else {
    info = "Please prepare your cash accordingly and wait for driver's confirmation....";
    gambar = require('../../../assets/loading.png');
  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 0.083691 * vh, alignItems: 'center' }}>
        <Text style={styles.textPayment}>Payment</Text>
        <Text style={styles.textPayment}>Cash</Text>
      </View>
      <View style={styles.hargaContainer}>
        <Text style={styles.harga}>Rp. 3000</Text>
      </View>
      <Text style={styles.textInfo}>{info}</Text>
      <Image style={styles.image} source={gambar}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.01073 * vh,
    // fontFamily: 'ZenKakuGothicAntique-Black'
  },
  hargaContainer: {
    flexDirection: 'row',
    backgroundColor: theme.LIGHT_GRAY,
    color: '#000000',
    borderRadius: 30,
    width: '84.6517%',
    height: 68,
    shadowOffset: { height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 0.04292 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0.0607375 * vh,
  },
  harga: {
    fontSize: 28,
    fontWeight: 700,
  },
  textPayment: {
    textAlign: 'center',
    fontWeight: 700,
    marginTop: 0.01073 * vh,
    fontSize: 28,
  },
  textInfo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 700,
    marginHorizontal: 0.1415 * vw,
  },
  image: {
    width: 73,
    height: 77,
    marginTop: 0.04292 * vh,
  },
});