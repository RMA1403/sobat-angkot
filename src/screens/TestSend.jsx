import { Button, View, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://10.5.102.234:5000/',
});

async function registerPushNotif() {
  let token;
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  token = (await Notifications.getExpoPushTokenAsync()).data;

  return token;
}

export default function TestSendPage() {
  const [token, setToken] = useState(null);

  const handleSend = async () => {
    try {
      console.log(token);
      // const res = await fetch(`http://192.168.18.214:5000/`, {
      //   method: 'POST',
      //   body: {
      //     token: token,
      //   },
      // });
      apiClient.post('', { token: token });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    registerPushNotif()
      .then((data) => setToken(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ paddingTop: 100 }}>
      <Text>H</Text>
      <Button title="SEND" onPress={handleSend} />
    </View>
  );
}
