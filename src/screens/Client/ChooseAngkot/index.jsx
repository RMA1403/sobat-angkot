import { ScrollView, View, Text, Image, FlatList } from 'react-native';
import NewInput from '../../../components/NewInput';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Jurusan from '../../../components/Jurusan';

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export default function ChooseAngkot({ navigation }) {
  const [jurusan, setJurusan] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [stopPoint, setStopPoint] = useState('');

  const [detailAngkot, setDetailAngkot] = useState([]);

  const jurusanMap = {
    'Dago - Caringin': [
      { platNomor: 'D 777 KR', kapasitas: '8' },
      { platNomor: 'D 666 KAY', kapasitas: '2' },
      { platNomor: 'D 1667 SAU', kapasitas: '11' },
    ],
    'Caringin - Sadang Serang': [
      { platNomor: 'D 1234 SR', kapasitas: '6' },
      { platNomor: 'D 1567 SAP', kapasitas: '3' },
      { platNomor: 'D 1823 BKT', kapasitas: '10' },
    ],
    'Cisitu - Tegallega': [
      { platNomor: 'D 1111 DAG', kapasitas: '7' },
      { platNomor: 'D 1726 SK', kapasitas: '1' },
      { platNomor: 'D 1237 JS', kapasitas: '9' },
    ],
  };

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
      } catch (err) {
        console.log(err);
      }
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setDetailAngkot(jurusanMap[jurusan]);
  }, [jurusan]);

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
        <View
          style={{
            marginTop: 15,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 0.0815 * vw,
          }}
        >
          <FlatList
            style={{ paddingBottom: 20 }}
            data={detailAngkot}
            horizontal={false}
            scrollEnabled={false}
            renderItem={({ item, idx }) => (
              <View style={{ marginTop: 19 }} key={idx}>
                <Jurusan
                  onClick={() => navigation.navigate('FoundAngkot')}
                  info={item.platNomor}
                  jurusan={jurusan}
                  kapasitas={item.kapasitas}
                ></Jurusan>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
