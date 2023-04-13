import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function Map({ width, height }) {
  const [region, setRegion] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.007,
        latitudeDelta: 0.007,
      });
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  return (
    <View
      style={{
        width,
        height,
        borderRadius: 50,
        overflow: 'hidden',
      }}
    >
      <MapView
        region={region}
        onRegionChange={(region) => setRegion({ region })}
        style={{ width, height }}
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
}
