import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PickupInputSection from './src/screens/ClientHome/PickupInputSection';
import DetailAngkotJurusan from './src/screens/ClientHome/DetailAngkotJurusanSection';

export default function App() {
  return (
    <View>
      <DetailAngkotJurusan jurusan="Dago - Caringin" onClick={() => 0} />
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
