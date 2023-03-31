import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DriverCard from './src/components/DriverCard';
// import NewInput from './src/components/NewInput';
import Jurusan from './src/components/Jurusan';
import NewInput from './src/components/NewInput';
import Login from './src/screens/Login/Login';

export default function App() {
  return (
    <View>
      <Login />
      {/* <NewInput /> */}
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
