import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import Jurusan from '../../components/Jurusan.jsx';

const vw = Dimensions.get('window').width;

export default function NearbyAngkotSection(props) {
  const jurusanAngkot = [
    { jurusan: 'Dago - Caringin', harga: '3000 - 5000' },
    { jurusan: 'Caringin - Sadang Serang', harga: '3000 - 5000' },
    { jurusan: 'Cisitu - Tegallega', harga: '3000 - 5000' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Available angkot nearby:</Text>
      <FlatList
        style={{ paddingBottom: 20 }}
        data={jurusanAngkot}
        horizontal={false}
        scrollEnabled={false}
        renderItem={({ item, idx }) => (
          <View style={styles.jurusan} key={idx}>
            <Jurusan
              onClick={props.onClick}
              isHarga={true}
              info={item.harga}
              jurusan={item.jurusan}
            ></Jurusan>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 0.0674 * vw,
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
  },
  jurusan: {
    marginTop: 19,
  },
});
