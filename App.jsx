import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Jurusan from './src/components/Jurusan';

export default function App() {
  return (
    <View style={styles.container}>
      <Jurusan jurusan="Dago - Caringin" info="D 666 KAY" isHarga={false} kapasitas="4"></Jurusan>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
