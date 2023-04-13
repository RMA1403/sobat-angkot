import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import DriverCard from '../../../components/DriverCard';
import NewInput from '../../../components/NewInput';

export default function FoundAngkot() {
  const [jurusan, setJurusan] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [stopPoint, setStopPoint] = useState('');

  const vh = Dimensions.get('window').height;
  const vw = Dimensions.get('window').width;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let value = await AsyncStorage.getItem('@jurusan');
        if (value) {
          setJurusan(value);
        }

        value = await AsyncStorage.getItem('@start_point');
        if (value) {
          setStartPoint(value);
        }

        value = await AsyncStorage.getItem('@stop_point');
        if (value) {
          setStopPoint(value);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', paddingTop: 60 }}>
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
        <Image
          style={{ width: '93%', height: 0.181 * vh, borderRadius: 50 }}
          source={require('../../../../assets/map-small.png')}
        />
        <View style={{ marginTop: 15, width: '100%', alignItems: 'center' }}>
          <NewInput holder={startPoint} canEdit={false} isBlue={true} />
          <Image
            style={{ alignSelf: 'flex-start', marginLeft: (61 / 430) * vw }}
            source={require('../../../../assets/input-link.png')}
          />
          <NewInput holder={stopPoint} canEdit={false} isOrange={true} />
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginVertical: 24 }}>
          <DriverCard />
        </View>
      </View>
    </ScrollView>
  );
}
