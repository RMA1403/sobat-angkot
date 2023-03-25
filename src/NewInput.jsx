import { View, TextInput, StyleSheet } from 'react-native';
import theme from '../src/constants/theme.style';

export default function NewInput(props) {
  let newStyle;
  let holder;
  let bulat;
  if (props.isOrange) {
    newStyle = styles.lokasi;
    holder = 'Stop Point';
    bulat = styles.orange;
  } else if (props.isBlue) {
    newStyle = styles.lokasi;
    holder = 'Pickup Point';
    bulat = styles.blue;
  } else if (props.isPassword) {
    newStyle = styles.commonInput;
    holder = 'Password';
  } else {
    newStyle = styles.commonInput;
    holder = 'Username/Email';
  }

  return (
    <View style={newStyle}>
      <View style={bulat}></View>
      <TextInput placeholder={holder} secureTextEntry={props.isPassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orange: {
    borderWidth: 1,
    borderColor: theme.ORANGE,
    backgroundColor: theme.ORANGE,
    marginTop: 12,
    marginLeft: 16,
    marginRight: 11,
    borderRadius: 100,
    width: 19,
    height: 20,
  },
  blue: {
    borderWidth: 1,
    borderColor: theme.BLUE,
    backgroundColor: theme.BLUE,
    marginTop: 12,
    marginLeft: 16,
    marginRight: 11,
    borderRadius: 100,
    width: 19,
    height: 20,
  },
  lokasi: {
    borderWidth: 1,
    borderColor: theme.DARK_GRAY,
    backgroundColor: theme.DARK_GRAY,
    color: '#000000',
    flexDirection: 'row',
    borderRadius: 40,
    width: 360,
    height: 43,
  },
  commonInput: {
    borderWidth: 1,
    borderColor: theme.DARK_GRAY,
    backgroundColor: theme.DARK_GRAY,
    paddingLeft: 27,
    color: '#000000',
    borderRadius: 40,
    width: 311,
    height: 56,
    padding: 17,
  },
});
