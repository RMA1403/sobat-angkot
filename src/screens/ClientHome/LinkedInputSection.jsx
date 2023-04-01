import { View, Image } from 'react-native';
import NewInput from '../../components/NewInput.jsx';
import { Dimensions } from 'react-native';

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export default function LinkedInputSection({ startPoint, stopPoint }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <NewInput holder={startPoint} canEdit={false} isBlue={true} />
      <Image
        style={{ alignSelf: 'flex-start', marginLeft: (61 / 430) * vw }}
        source={require('../../../assets/input-link.png')}
      />
      <NewInput holder={stopPoint} canEdit={false} isOrange={true} />
    </View>
  );
}
