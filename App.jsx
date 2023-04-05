import ClientHome from './src/screens/ClientHome';
import Login from './src/screens/Login';
import PaymentEMoney from './src/screens/PaymentEMoney';
import { View } from 'react-native';
import PaymentCash from './src/screens/PaymentCash';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    <View>
      <PaymentEMoney success={true} />
    </View>
  );
}
