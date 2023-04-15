import { useEffect, useRef } from 'react';
import { Text, View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function TestReceivePage({ navigation }) {
  const responseListener = useRef();
  const notifListener = useRef();

  useEffect(() => {
    responseListener.current = Notifications.addNotificationResponseReceivedListener((res) => {
      console.log(res);
      console.log('ghe');
    });

    notifListener.current = Notifications.addNotificationReceivedListener((notif) => {
      console.log('HLOO');
      console.log(notif);
    });
  });

  return (
    <View style={{ paddingTop: 100 }}>
      <Text>HELLO</Text>
      <Button
        title="CHANGE PAGE"
        style={{ marginTop: 50 }}
        onPress={() => navigation.navigate('TestSendPage')}
      />
    </View>
  );
}
