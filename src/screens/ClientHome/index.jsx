import { Text, View, Image, ScrollView } from 'react-native';
import DetailAngkotJurusan from './DetailAngkotJurusanSection';
import LinkedInputSection from './LinkedInputSection';
import NearbyAngkotSection from './NearbyAngkotSection';
import PickupInputSection from './PickupInputSection';
import DriverCard from '../../components/DriverCard';
import { useState } from 'react';
import { Dimensions } from 'react-native';

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export default function ClientHome() {
  const [flow, setFlow] = useState(1);
  const [jurusan, setJurusan] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [stopPoint, setStopPoint] = useState('');

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', paddingTop: 60 }}>
        <Text style={{ fontWeight: 700, fontSize: 16, display: flow == 1 ? 'flex' : 'none' }}>
          Your current loaction:{' '}
        </Text>
        <Text
          style={{
            marginTop: 6,
            marginBottom: 12,
            fontWeight: 700,
            fontSize: 28,
            display: flow == 1 ? 'flex' : 'none',
          }}
        >
          Jl. Ir. H. Djuanda, no. 16
        </Text>
        <Text
          style={{
            marginTop: 6,
            marginBottom: 12,
            fontWeight: 700,
            fontSize: 28,
            display: flow > 1 ? 'flex' : 'none',
          }}
        >
          {jurusan}
        </Text>
        {flow < 3 ? (
          <Image
            style={{ width: '93%', height: 0.368 * vh, borderRadius: 50 }}
            source={require('../../../assets/map-large.png')}
          />
        ) : (
          <Image
            style={{ width: '93%', height: 0.181 * vh, borderRadius: 50 }}
            source={require('../../../assets/map-small.png')}
          />
        )}

        <View style={{ marginTop: 15, width: '100%', display: flow >= 3 ? 'flex' : 'none' }}>
          <LinkedInputSection startPoint={startPoint} stopPoint={stopPoint} />
        </View>

        {flow == 1 ? (
          <View style={{ marginTop: 15, width: '100%' }}>
            <NearbyAngkotSection
              onClick={(jurusan) => {
                setFlow(2);
                setJurusan(jurusan);
              }}
            />
          </View>
        ) : flow == 2 ? (
          <View style={{ marginTop: 15, width: '100%' }}>
            <PickupInputSection
              onClick={(start, stop) => {
                setFlow(3);
                setStartPoint(start);
                setStopPoint(stop);
              }}
            />
          </View>
        ) : flow == 3 ? (
          <View style={{ marginTop: 15, width: '100%' }}>
            <DetailAngkotJurusan jurusan={jurusan} onClick={() => setFlow(4)} />
          </View>
        ) : null}

        <Text
          style={{
            textAlign: 'center',
            width: 0.8 * vw,
            marginTop: 15,
            fontWeight: 700,
            fontSize: 20,
            display: flow == 4 ? 'flex' : 'none',
          }}
        >
          Nearest Angkot is in our way to you!
        </Text>

        {flow == 4 ? (
          <View style={{ width: '100%', alignItems: 'center', marginVertical: 24 }}>
            <DriverCard />
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}
