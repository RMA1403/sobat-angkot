import { View, StyleSheet, Image, Text, Pressable, TouchableOpacity } from 'react-native';
import theme from '../constants/theme.style';
import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').width;

export default function ConfirmPayment(props) {
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
        <View style={{ flex: 1, paddingRight: (52 / 430) * vw }}>
          <Text style={{ fontWeight: 400, fontSize: 24 }}>kaie666 wants to pay with cash!</Text>
        </View>
      </View>
      <Text style={{ textAlign: 'center', fontWeight: 700, fontSize: 24 }}>
        Please confirm the payment.
      </Text>
      <Text
        style={{ textAlign: 'center', fontWeight: 700, fontSize: 24, marginTop: (10 / 932) * vh }}
      >
        Rp.3000
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  red: {
    borderWidth: 1,
    borderColor: theme.RED,
    backgroundColor: theme.RED,
    borderRadius: 100,
    width: 19,
    height: 20,
    justifyContent: 'flex-end',
    position: 'absolute',
    marginVertical: 24,
    right: 25,
  },
  cardContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 40,
    width: 0.823 * vw,
    overflow: 'hidden',
  },
  driverImageContainer: {
    marginRight: (27 / 430) * vw,
    width: 0.158 * vw,
    height: 0.158 * vw,
    zIndex: -10,
  },
});
