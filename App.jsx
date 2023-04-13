import ClientHome from './src/screens/ClientHome';
import SelectJurusan from './src/screens/Client/SelectJurusan';
import ChoosePickup from './src/screens/Client/ChoosePickup';
import ChooseAngkot from './src/screens/Client/ChooseAngkot';
import FoundAngkot from './src/screens/Client/FoundAngkot';
import Login from './src/screens/Login';

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
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="ClientHome" component={ClientHome} /> */}
        <Stack.Screen name="SelectJurusan" component={SelectJurusan} />
        <Stack.Screen name="ChoosePickup" component={ChoosePickup} />
        <Stack.Screen name="ChooseAngkot" component={ChooseAngkot} />
        <Stack.Screen name="FoundAngkot" component={FoundAngkot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
