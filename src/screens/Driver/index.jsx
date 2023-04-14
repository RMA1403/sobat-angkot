import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import Map from '../../components/Map';
import theme from '../../constants/theme.style';
import ConfirmPayment from '../../components/ConfirmPayment';
import { LinearGradient } from 'expo-linear-gradient';
import * as Notifications from 'expo-notifications';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function DriverHome() {
  const [flow, setFlow] = useState(1);
  const [angka, setAngka] = useState(8);

  let notConfirmed;
  let isLoading;

  const notificationListener = useRef();

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      if (notification.request.content.body === 'Cash Payment') {
        setFlow(2);
      }
    });
  }, []);

  const data = {
    name: 'Mr. John Doe',
    licenseNumber: 'D 777 KR',
  };

  if (flow == 2) {
    notConfirmed = true;
    isLoading = false;
  } else if (flow == 3) {
    notConfirmed == false;
    isLoading = true;
  } else {
    notConfirmed == false;
    isLoading == false;
  }

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Good Morning,</Text>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: (40 / 932) * vh,
          justifyContent: 'space-between',
          paddingRight: (37 / 430) * vw,
        }}
      >
        <View style={{ flexDirection: 'column', marginRight: (13 / 430) * vw }}>
          <Image style={styles.image} source={require('../../../assets/angkot-driver.png')} />
          <Text style={styles.platNomor}>{data.licenseNumber}</Text>
        </View>
        <Map width={(212 / 430) * vw} height={(208 / 932) * vh} />
      </View>

      {flow < 2 ? (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={styles.countingContainer}>
            <TouchableOpacity
              onPress={() => (angka < 12 ? setAngka(angka + 1) : null)}
              style={styles.counting}
            >
              <Text style={{ fontWeight: 700, fontSize: 60, color: '#8D8D8D' }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (angka > 0 ? setAngka(angka - 1) : null)}
              style={styles.counting}
            >
              <Text style={{ fontWeight: 700, fontSize: 60, color: '#8D8D8D' }}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.passengerCount}>
            <Text style={{ fontWeight: 700, fontSize: 20 }}>Passenger Count: {angka}/12</Text>
          </View>
        </View>
      ) : null}

      {flow > 1 ? (
        <View style={{ alignItems: 'center' }}>
          <LinearGradient colors={['#FFFFFF', '#D9D9D9']} style={styles.linearGradien}>
            <View style={styles.confirmPaymentContainer}>
              <View style={{ marginTop: (73 / 932) * vh }}>
                <ConfirmPayment
                  username="kaie666"
                  notConfirmed={notConfirmed}
                  isLoading={isLoading}
                  onConfirm={() => {
                    setFlow(3);
                    setTimeout(() => setFlow(4), 1000);
                    setTimeout(() => setFlow(1), 3000);
                  }}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: (87 / 932) * vh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 700,
    fontSize: 28,
    textAlign: 'center',
  },
  platNomor: {
    fontWeight: 700,
    fontSize: 26,
    marginLeft: (39 / 430) * vw,
    marginTop: -((25 / 932) * vh),
  },
  image: {
    width: (148 / 430) * vw,
    height: (127 / 932) * vh,
    marginTop: (24 / 932) * vh,
    marginLeft: (20 / 430) * vw,
  },
  counting: {
    width: (147 / 430) * vw,
    height: (143 / 932) * vh,
    backgroundColor: theme.DARK_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    shadowOffset: { height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: (12 / 430) * vw,
  },
  countingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: (61 / 932) * vh,
    marginBottom: (52 / 932) * vh,
  },
  passengerCount: {
    width: (330 / 430) * vw,
    height: 66,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    marginHorizontal: (12 / 430) * vw,
  },
  confirmPaymentContainer: {
    marginTop: -((12 / 932) * vh),
    borderRadius: 30,
    alignItems: 'center',
    width: (401 / 430) * vw,
    height: (480 / 932) * vh,
  },
  linearGradien: {
    borderRadius: 30,
    width: (401 / 430) * vw,
    height: (468 / 932) * vh,
  },
});
