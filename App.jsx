import ClientHome from './src/screens/ClientHome';
import Login from './src/screens/Login';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import ConfirmPayment from './src/components/ConfirmPayment';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function App() {
  return (
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <ConfirmPayment username="kaie666" notConfirmed={false} isLoading={true} />
    </View>
    // <NavigationContainer theme={MyTheme}>
    //   <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="ClientHome" component={ClientHome} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
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
