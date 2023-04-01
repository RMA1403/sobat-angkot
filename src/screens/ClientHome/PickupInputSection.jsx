import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import NewInput from '../../components/NewInput.jsx';
import theme from '../../constants/theme.style.js';
import { useState, useRef } from 'react';

export default function PickupInputSection({ onClick }) {
  const [startPoint, setStartPoint] = useState('');
  const [stopPoint, setStopPoint] = useState('');

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.pickupText}>Choose pickup point:</Text>
      <NewInput
        onChange={(start) => {
          setStartPoint(start);
        }}
        isBlue={true}
      />
      <Text style={styles.pickupText}>Choose stop point:</Text>
      <NewInput onChange={(stop) => setStopPoint(stop)} isOrange={true} />
      <TouchableOpacity
        style={styles.searchButton}
        onPressIn={() => {
          onClick(startPoint, stopPoint);
        }}
      >
        <Text style={styles.searchText}>Search...</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pickupText: {
    fontWeight: 700,
    fontSize: 12,
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'left',
    width: '83.7%',
  },
  sectionContainer: {
    alignItems: 'center',
  },
  searchButton: {
    justifyContent: 'center',
    marginTop: 42,
    backgroundColor: theme.LIGHT_BLUE,
    borderRadius: 50,
    width: 131,
    height: 41,
    marginBottom: 15,
  },
  searchText: {
    color: theme.DARK_BLUE,
    fontWeight: 700,
    textAlign: 'center',
    fontSize: 20,
  },
});
