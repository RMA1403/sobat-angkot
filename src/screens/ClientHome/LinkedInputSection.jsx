import { View, Image } from 'react-native';
import NewInput from '../../components/NewInput.jsx';

export default function LinkedInputSection({ startPoint, stopPoint }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <NewInput holder={startPoint} canEdit={false} isBlue={true} />
      <Image
        style={{ alignSelf: 'flex-start', marginLeft: 61 }}
        source={require('../../../assets/input-link.png')}
      />
      <NewInput holder={stopPoint} canEdit={false} isOrange={true} />
    </View>
  );
}
