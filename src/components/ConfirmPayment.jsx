import { View, StyleSheet, Image, Text, Pressable, TouchableOpacity } from 'react-native';
import theme from '../constants/theme.style';
import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').width;

export default function ConfirmPayment(props) {
  let confirmed;
  if (props.notConfirmed) {
    props.isLoading = false;
    confirmed = false;
  } else if (props.isLoading) {
    confirmed = false;
  } else {
    confirmed = true;
  }
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: (36 / 932) * vh,
          marginLeft: (29 / 430) * vw,
          marginBottom: (20 / 932) * vh,
        }}
      >
        <View style={styles.driverImageContainer}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/profile-icon.png')}
          />
        </View>
        <View style={{ flex: 1, paddingRight: (45 / 430) * vw }}>
          <Text style={{ fontWeight: 400, fontSize: 20 }}>
            <Text style={{ fontWeight: 700 }}>{props.username}</Text> wants to pay with cash!
          </Text>
        </View>
      </View>
      <Text style={{ textAlign: 'center', fontWeight: 700, fontSize: 20 }}>
        Please confirm the payment.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: 28,
          marginTop: (10 / 932) * vh,
        }}
      >
        Rp.3000
      </Text>

      {props.notConfirmed ? (
        <TouchableOpacity style={styles.notConfirmed}>
          <Text style={{ textAlign: 'center', fontWeight: 700, fontSize: 20 }}>Confirm</Text>
        </TouchableOpacity>
      ) : null}

      {props.isLoading ? (
        <View style={styles.loadingImageContainer}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/loading.png')}
          />
        </View>
      ) : null}

      {confirmed ? (
        <View style={styles.confirmed}>
          <Text style={{ fontWeight: 700, fontSize: 20, color: theme.DARK_GRAY }}>
            Payment Confirmed!
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 40,
    width: 0.823 * vw,
    overflow: 'hidden',
    alignItems: 'center',
  },
  driverImageContainer: {
    marginRight: (27 / 430) * vw,
    width: 0.158 * vw,
    height: 0.158 * vw,
    zIndex: -10,
  },
  loadingImageContainer: {
    width: 0.9 * 0.158 * vw,
    height: 0.9 * 0.158 * vw,
    marginBottom: (38.7 / 932) * vh,
    marginTop: (27 / 932) * vh,
  },
  notConfirmed: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.DARK_GRAY,
    backgroundColor: theme.DARK_GRAY,
    color: '#000000',
    borderRadius: 20,
    width: (283 / 430) * vw,
    height: 48,
    shadowOffset: { height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: (55 / 932) * vh,
    marginTop: (35 / 932) * vh,
  },
  confirmed: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.DARK_GRAY,
    backgroundColor: 'white',
    color: '#000000',
    borderRadius: 20,
    width: (283 / 430) * vw,
    height: 48,
    marginBottom: (55 / 932) * vh,
    marginTop: (35 / 932) * vh,
  },
});
