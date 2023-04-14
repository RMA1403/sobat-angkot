import SelectJurusan from './src/screens/Client/SelectJurusan';
import ChoosePickup from './src/screens/Client/ChoosePickup';
import ChooseAngkot from './src/screens/Client/ChooseAngkot';
import FoundAngkot from './src/screens/Client/FoundAngkot';
import PaymentCash from './src/screens/Payment/PaymentCash';
import PaymentEMoney from './src/screens/Payment/PaymentEMoney';
import Login from './src/screens/Login';
import PaymentEWallet from './src/screens/Payment/PaymentEWallet';
import Notification from './src/components/Notification';
import { View } from 'react-native';

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
    // <NavigationContainer theme={MyTheme}>
    //   <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="SelectJurusan" component={SelectJurusan} />
    //     <Stack.Screen name="ChoosePickup" component={ChoosePickup} />
    //     <Stack.Screen name="ChooseAngkot" component={ChooseAngkot} />
    //     <Stack.Screen name="FoundAngkot" component={FoundAngkot} />
    //     <Stack.Screen name="PaymentCash" component={PaymentCash} />
    //     <Stack.Screen name="PaymentEMoney" component={PaymentEMoney} />
    //     <Stack.Screen name="PaymentEWallet" component={PaymentEWallet} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Notification paid={true} username="1234" harga="johndoe" payment="qris" />
    </View>
  );
}
