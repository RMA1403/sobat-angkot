import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewInput from './src/components/NewInput';

export default function App() {
  return (
    <View style={styles.container}>
      <NewInput isBlue={true} isOrange={false} isPassword={false}></NewInput>
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
