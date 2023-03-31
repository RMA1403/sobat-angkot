import { View, Image } from 'react-native';
import NewInput from '../../components/NewInput.jsx';

export default function LinkedInputSection() {
  return (
    <View style={{ alignItems: 'center' }}>
      <NewInput isBlue={true} />
      <Image
        style={{ alignSelf: 'flex-start', marginLeft: 61 }}
        source={require('../../../assets/input-link.png')}
      />
      <NewInput isOrange={true} />
    </View>
  );
}
