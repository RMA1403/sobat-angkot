import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import theme from '../../constants/theme.style';
import { Dimensions } from 'react-native';

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export default function PaymentEWallet(props) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.textPayment}>Payment</Text>
        <Text style={styles.textPayment}>e-Wallet</Text>
      </View>
      <View style={styles.hargaContainer}>
        <Text style={styles.harga}>{props.harga}</Text>
      </View>
      {props.success ? (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textInfo}>Payment successful!</Text>
          <Image style={styles.image} source={require('../../../assets/success.png')}></Image>
        </View>
      ) : (
        <TouchableOpacity style={styles.scan}>
          <Text style={{ textAlign: 'center', fontWeight: 700, fontSize: 28 }}>Scan QR</Text>
        </TouchableOpacity>
      )}
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
  scan: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    color: '#000000',
    borderRadius: 90,
    width: (330 / 430) * vw,
    height: 66,
    shadowOffset: { height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: (55 / 932) * vh,
  },
});
