import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NewInput from '../../components/NewInput';
import theme from '../../constants/theme.style';

export default function Login({ navigation }) {
  const handlePress = () => {
    setIsPressed(false);
    navigation.navigate('ClientHome');
  };

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
        <Text style={{ color: theme.DARK_BLUE }}>Doesn't have an account yet? </Text>
        <TouchableOpacity onPress={handlePressSignUp}>
          <Text style={{ color: theme.DARK_BLUE, fontWeight: 700 }}>Sign up here.</Text>
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
    width: 255,
    height: 140,
    marginTop: 215.5,
  },
  textInput: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  login: {
    borderWidth: 1,
    marginTop: 25,
    borderColor: theme.LIGHT_BLUE,
    backgroundColor: theme.LIGHT_BLUE,
    borderRadius: 40,
    width: 84,
    height: 23,
    marginBottom: 15,
  },
  textLogin: {
    color: theme.DARK_BLUE,
    paddingTop: 2,
    paddingLeft: 24,
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 40,
  },
});
