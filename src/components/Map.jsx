import { View } from 'react-native';
import MapView from 'react-native-maps';

export default function Map({ width, height }) {
  return (
    <View
      style={{
        width,
        height,
        borderRadius: 50,
        overflow: 'hidden',
      }}
    >
      <MapView style={{ width, height }} />
    </View>
  );
}
