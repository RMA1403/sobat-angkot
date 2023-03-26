import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DriverCard from './src/components/DriverCard';
// import NewInput from './src/components/NewInput';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NewInput isBlue={true} isOrange={false} isPassword={false}></NewInput> */}
      <DriverCard></DriverCard>
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
