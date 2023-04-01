import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import Jurusan from '../../components/Jurusan.jsx';

const vw = Dimensions.get('window').width;

export default function DetailAngkotJurusan(props) {
  let detailAngkot;

  const jurusanAngkotDagoCaringin = [
    { platNomor: 'D 777 KR', kapasitas: '8' },
    { platNomor: 'D 666 KAY', kapasitas: '2' },
    { platNomor: 'D 1667 SAU', kapasitas: '11' },
  ];

  const jurusanAngkotCaringinSadangSerang = [
    { platNomor: 'D 1234 SR', kapasitas: '6' },
    { platNomor: 'D 1567 SAP', kapasitas: '3' },
    { platNomor: 'D 1823 BKT', kapasitas: '10' },
  ];

  const jurusanAngkotCisituTegallega = [
    { platNomor: 'D 1111 DAG', kapasitas: '7' },
    { platNomor: 'D 1726 SK', kapasitas: '1' },
    { platNomor: 'D 1237 JS', kapasitas: '9' },
  ];

  if (props.jurusan == 'Dago - Caringin') {
    detailAngkot = jurusanAngkotDagoCaringin;
  } else if (props.jurusan == 'Caringin - Sadang Serang') {
    detailAngkot = jurusanAngkotCaringinSadangSerang;
  } else if (props.jurusan == 'Cisitu - Tegallega') {
    detailAngkot = jurusanAngkotCisituTegallega;
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ paddingBottom: 20 }}
        data={detailAngkot}
        horizontal={false}
        scrollEnabled={false}
        renderItem={({ item, idx }) => (
          <View style={styles.jurusan} key={idx}>
            <Jurusan
              onClick={props.onClick}
              info={item.platNomor}
              jurusan={props.jurusan}
              kapasitas={item.kapasitas}
            ></Jurusan>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 0.0815 * vw,
  },
  jurusan: {
    marginTop: 19,
  },
});
