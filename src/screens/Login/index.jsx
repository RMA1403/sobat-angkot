import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NewInput from '../../components/NewInput';
import theme from '../../constants/theme.style';
import { Dimensions } from 'react-native';

const vh = Dimensions.get('window').height;

export default function Login({ navigation }) {
  const handlePress = () => navigation.navigate('SelectJurusan');
  const handlePressSignUp = () => 0;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/angkot1.png')} />
      <Text style={styles.text}>Sobat Angkot</Text>
      <View style={styles.textInput}>
        <NewInput />
      </View>
      <View style={styles.textInput}>
        <NewInput isPassword={true} />
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.login}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={{ color: theme.DARK_BLUE, fontSize: 12 }}>Doesn't have an account yet? </Text>
        <TouchableOpacity onPress={handlePressSignUp}>
          <Text style={{ color: theme.DARK_BLUE, fontWeight: 700, fontSize: 12 }}>
            Sign up here.
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: 'ZenKakuGothicAntique-Black'
  },
  image: {
    width: 220,
    height: 118,
    marginTop: 0.2 * vh,
  },
  textInput: {
    marginTop: (25 / 932) * vh,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  login: {
    borderWidth: 1,
    marginTop: (25 / 932) * vh,
    borderColor: theme.LIGHT_BLUE,
    backgroundColor: theme.LIGHT_BLUE,
    borderRadius: 40,
    width: 84,
    height: 23,
    marginBottom: (15 / 932) * vh,
  },
  textLogin: {
    color: theme.DARK_BLUE,
    paddingLeft: 24,
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 34,
    fontWeight: 700,
    marginBottom: (40 / 932) * vh,
  },
});
