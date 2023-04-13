import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import Jurusan from '../../../components/Jurusan';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export default function SelectJurusan({ navigation }) {
  const jurusanAngkot = [
    { jurusan: 'Dago - Caringin', harga: '3000 - 5000' },
    { jurusan: 'Caringin - Sadang Serang', harga: '3000 - 5000' },
    { jurusan: 'Cisitu - Tegallega', harga: '3000 - 5000' },
  ];

  const handleClick = async (value) => {
    try {
      await AsyncStorage.setItem('@jurusan', value);
      navigation.navigate('ChoosePickup');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', paddingTop: 60 }}>
        <Text style={{ fontWeight: 700, fontSize: 16 }}>Your current loaction:</Text>
        <Text style={{ marginTop: 6, marginBottom: 12, fontWeight: 700, fontSize: 28 }}>
          Jl. Ir. H. Djuanda, no. 16
        </Text>
        <Image
          style={{ width: '93%', height: 0.368 * vh, borderRadius: 50 }}
          source={require('../../../../assets/map-large.png')}
        />
        <View
          style={{
            marginTop: 15,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 0.0674 * vw,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
            Available angkot nearby:
          </Text>
          <FlatList
            style={{ paddingBottom: 20 }}
            data={jurusanAngkot}
            horizontal={false}
            scrollEnabled={false}
            renderItem={({ item, idx }) => (
              <View style={{ marginTop: 19 }} key={idx}>
                <Jurusan
                  onClick={() => handleClick(item.jurusan)}
                  isHarga={true}
                  info={item.harga}
                  jurusan={item.jurusan}
                ></Jurusan>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
