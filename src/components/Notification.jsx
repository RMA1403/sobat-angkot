import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import theme from '../constants/theme.style';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function Notification(props) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: (64 / 932) * vh,
        right: (15 / 430) * vw,
      }}
    >
      {/* <LinearGradient colors={[theme.DARK_GRAY, '#FFFFFF']} style={styles.linearGradient}> */}
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: (22 / 430) * vw }}>
          <View style={styles.bulat}></View>
          <Text style={{ fontWeight: 400, fontSize: 15 }}>NOTIFICATION</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.imageContainer}>
            <Image
              style={{ borderRadius: 35 }}
              source={require('../../assets/angkot-setengah.png')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 700, fontSize: 14 }}>SobatAngkot</Text>
            {props.foundAngkot ? (
              <Text>
                We found your Angkot! It's on its way to pick you up, please wait patiently.{' '}
                <Text style={{ fontWeight: 700, fontSize: 14 }}>
                  Capacity: {props.kapasitas}/12
                </Text>
              </Text>
            ) : null}
            {props.angkotIsHere ? (
              <Text>
                Your angkot is here!{' '}
                <Text style={{ fontWeight: 700, fontSize: 14 }}>{props.platNomor} </Text>
                drived by <Text style={{ fontWeight: 700, fontSize: 14 }}>{props.supir} </Text>
              </Text>
            ) : null}
            {props.paid ? (
              <Text>
                User <Text style={{ fontWeight: 700, fontSize: 14 }}>{props.username} </Text>
                just paid <Text style={{ fontWeight: 700, fontSize: 14 }}>{props.harga} </Text>
                through <Text style={{ fontWeight: 700, fontSize: 14 }}>{props.payment}! </Text>
              </Text>
            ) : null}
          </View>
        </View>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
}
5;

const styles = StyleSheet.create({
  linearGradient: {
    width: (401 / 430) * vw,
    height: (480 / 932) * vh,
    alignItems: 'center',
    borderRadius: 30,
    paddingTop: (11 / 932) * vh,
  },
  container: {
    width: (378 / 430) * vw,
    // height: 109,
    paddingBottom: 8,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  bulat: {
    backgroundColor: theme.DARK_GRAY,
    width: 14,
    height: 14,
    borderRadius: 100,
    marginRight: (7 / 430) * vw,
  },
  imageContainer: {
    width: (58 / 430) * vw,
    // height: 106,
    height: (58 / 430) * vw,
    marginLeft: (22 / 430) * vw,
    marginRight: (7 / 430) * vw,
  },
  text: {
    fontSize: 14,
  },
});
