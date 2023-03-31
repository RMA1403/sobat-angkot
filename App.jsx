import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClientHome from './src/screens/ClientHome';
import PaymentCash from './src/screens/PaymentCash';

export default function App() {
  return (
    <View>
      <PaymentCash success={true} />
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
