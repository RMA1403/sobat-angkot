import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../constants/theme.style.js';
import NewInput from '../../../components/NewInput.jsx';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Map from '../../../components/Map';
import Notification from '../../../components/Notification.jsx';

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export default function ChoosePickup({ navigation }) {
  const [jurusan, setJurusan] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [stopPoint, setStopPoint] = useState('');
  const [capacity, setCapacity] = useState(8);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let value = await AsyncStorage.getItem('@jurusan');
        if (value !== null) {
          setJurusan(value);
        }

        value = await AsyncStorage.getItem('@start_point');
        if (value !== null) {
          setStartPoint(value);
        }

        value = await AsyncStorage.getItem('@stop_point');
        if (value !== null) {
          setStopPoint(value);
        }

        value = await AsyncStorage.getItem('@capacity');
        if (value) {
          setCapacity(value);
        }
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(() => setShowNotif(true), 2500);
    setTimeout(() => navigation.navigate('FoundAngkot'), 5000);
    fetchData().catch((err) => console.log(err));
  }, []);

  // const handleClick = async () => {
  //   try {
  //     await AsyncStorage.setItem('@start_point', startPoint);
  //     await AsyncStorage.setItem('@stop_point', stopPoint);
  //     navigation.navigate('ChooseAngkot');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <View style={{ alignItems: 'center', paddingTop: 60 }}>
      <View
        style={{
          position: 'absolute',
          width: 1 * vw,
          zIndex: 50,
          top: 10,
          opacity: showNotif ? 100 : 0,
        }}
      >
        <View style={{ width: 1 * vw, alignItems: 'center' }}>
          <Notification foundAngkot={true} kapasitas={capacity} />
        </View>
      </View>
      <Text
        style={{
          marginTop: 6,
          marginBottom: 12,
          fontWeight: 700,
          fontSize: 28,
        }}
      >
        {jurusan}
      </Text>
      <Map width={0.93 * vw} height={0.368 * vh} />
      <View style={{ marginTop: 15, width: '100%', alignItems: 'center' }}>
        <Text style={styles.pickupText}>Choose pickup point:</Text>
        <NewInput holder={startPoint} canEdit={false} isBlue={true} />
        <Text style={styles.pickupText}>Choose stop point:</Text>
        <NewInput holder={stopPoint} canEdit={false} isOrange={true} />
        {/* <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginTop: 42,
            backgroundColor: theme.LIGHT_BLUE,
            borderRadius: 50,
            width: 131,
            height: 41,
            marginBottom: 15,
          }}
          onPressIn={handleClick}
        > */}
        <Text
          style={{
            color: theme.DARK_BLUE,
            fontWeight: 700,
            textAlign: 'center',
            fontSize: 20,
          }}
        >
          Searching...
        </Text>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pickupText: {
    fontWeight: 700,
    fontSize: 12,
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'left',
    width: '83.7%',
  },
});
