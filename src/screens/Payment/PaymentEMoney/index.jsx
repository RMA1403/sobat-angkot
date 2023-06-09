import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../../../constants/theme.style';
import url from '../../../constants/url';
import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { create } from 'apisauce';

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export default function PaymentEMoney() {
  let info;
  let gambar;

  const [isSuccess, setSuccess] = useState(false);

  const fetchBackend = async () => {
    try {
      await create({ baseURL: url }).post('/emoney-payment');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => fetchBackend(), 1000);
    setTimeout(() => setSuccess(true), 2000);
  }, []);

  if (isSuccess) {
    info = 'Payment successful!';
    gambar = require('../../../../assets/success.png');
  } else {
    info = 'Please prepare your card and tap it accordingly...';
    gambar = require('../../../../assets/loading.png');
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.textPayment}>Payment</Text>
        <Text style={styles.textPayment}>e-Money</Text>
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
    marginTop: (88 / 932) * vh,
    // fontFamily: 'ZenKakuGothicAntique-Black'
  },
  hargaContainer: {
    flexDirection: 'row',
    backgroundColor: theme.LIGHT_GRAY,
    color: '#000000',
    borderRadius: 30,
    width: '84.6517%',
    height: (80 / 932) * vh,
    shadowOffset: { height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: (50 / 932) * vh,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: (50 / 932) * vh,
    elevation: 6,
  },
  harga: {
    fontSize: 28,
    fontWeight: 700,
  },
  textPayment: {
    textAlign: 'center',
    fontWeight: 700,
    marginTop: (11 / 932) * vh,
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
    marginTop: 0.05 * vh,
  },
});
