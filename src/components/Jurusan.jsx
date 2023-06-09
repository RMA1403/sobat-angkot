import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import theme from '../constants/theme.style';
import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function Jurusan(props) {
  let newStyle = styles.common;
  let jurusan = props.jurusan;
  let info = props.info;
  let bulat;
  let garis = '   | ';
  let kapasitas = props.kapasitas;
  let templateKapasitas = 'Capacity: ';
  let maxKapasitas = '/12';

  if (props.isHarga) {
    infoStyle = styles.harga;
    garis = '';
    templateKapasitas = '';
    maxKapasitas = '';
    kapasitas = '';
  } else if (kapasitas < 5) {
    bulat = styles.green;
    infoStyle = styles.platNomor;
  } else if (kapasitas < 9) {
    bulat = styles.yellow;
    infoStyle = styles.platNomor;
  } else if (kapasitas < 13) {
    bulat = styles.red;
    infoStyle = styles.platNomor;
  }

  return (
    <TouchableOpacity onPress={() => props.onClick(props.jurusan)} style={newStyle}>
      <Image style={styles.angkot} source={require('../../assets/angkot2.png')}></Image>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={[styles.jurusan, { marginRight: props.isHarga ? 0 : (53 / 430) * vw }]}>
            {jurusan}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={infoStyle}>
            {info}
            {garis}
          </Text>
          <Text style={styles.kapasitas}>
            {templateKapasitas}
            {kapasitas}
            {maxKapasitas}
          </Text>
        </View>
      </View>
      <View style={bulat}></View>
    </TouchableOpacity>
  );
}

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
  yellow: {
    borderWidth: 1,
    borderColor: theme.YELLOW,
    backgroundColor: theme.YELLOW,
    borderRadius: 100,
    width: 19,
    height: 20,
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 25,
  },
  green: {
    borderWidth: 1,
    borderColor: theme.GREEN,
    backgroundColor: theme.GREEN,
    borderRadius: 100,
    width: 19,
    height: 20,
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 25,
  },
  angkot: {
    width: 79,
    height: 40,
    marginTop: 8,
    marginLeft: 3,
  },
  common: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: theme.DARK_GRAY,
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#000000',
    borderRadius: 20,
    width: '100%',
    shadowOffset: { height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
    paddingBottom: (10.5 / 932) * vh,
  },
  jurusan: {
    flex: 1,
    fontSize: 16,
    fontWeight: 700,
    marginTop: 9,
  },
  harga: {
    fontSize: 10,
    fontWeight: 400,
    marginTop: 3,
    color: '#6A5C5C',
  },
  platNomor: {
    fontSize: 10,
    fontWeight: 700,
    marginTop: 6,
  },
  kapasitas: {
    fontWeight: 700,
    fontSize: 10,
    color: theme.DARK_GRAY,
    marginTop: 7,
  },
});
