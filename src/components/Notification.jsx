import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import theme from '../constants/theme.style';
import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function Notification(props) {
  return (
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
        <View>
          <Text style={{ fontWeight: 700, fontSize: 14 }}>SobatAngkot</Text>
          {props.foundAngkot ? (
            <Text>
              We found your Angkot! It's on its way to pick you up, please wait patiently.{' '}
              <Text style={{ fontWeight: 700, fontSize: 14 }}>Capacity: {props.kapasitas}/12</Text>
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
  );
}
5;

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
    right: 25,
  },
  container: {
    width: (378 / 430) * vw,
    height: 109,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
  },
  bulat: {
    backgroundColor: theme.DARK_GRAY,
    width: 14,
    height: 14,
    borderRadius: 100,
    marginRight: (7 / 430) * vw,
  },
  imageContainer: {
    width: (24 / 430) * vw,
    height: 106,
    marginLeft: (22 / 430) * vw,
    marginRight: (7 / 430) * vw,
  },
  text: {
    fontSize: 14,
  },
});
