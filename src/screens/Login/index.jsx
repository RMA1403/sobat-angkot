import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import NewInput from '../../components/NewInput';
import theme from '../../constants/theme.style';
import { useState } from 'react';

export default function Login({ navigation }) {
  const [isPressed, setIsPressed] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    navigation.navigate('ClientHome');
  };

  const handlePressSignUpIn = () => {
    setSignUp(true);
  };

  const handlePressSignUpOut = () => {
    setSignUp(false);
  };

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
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.login, isPressed && styles.pressedLogin]}
      >
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={{ color: theme.DARK_BLUE }}>Doesn't have an account yet? </Text>
        <Pressable
          onPressIn={handlePressSignUpIn}
          onPressOut={handlePressSignUpOut}
          style={signUp && styles.pressedSignUp}
        >
          <Text style={{ color: theme.DARK_BLUE, fontWeight: 700 }}>Sign up here.</Text>
        </Pressable>
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
  pressedLogin: {
    opacity: 0.5,
    backgroundColor: theme.LIGHT_BLUE,
  },
  pressedSignUp: {
    opacity: 0.5,
    backgroundColor: 'white',
  },
});
