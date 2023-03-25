import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewInput from './src/NewInput';

export default function App() {
  return (
    <View style={styles.container}>
      <NewInput isBlue={false} isOrange={false} isPassword={true}></NewInput>
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
