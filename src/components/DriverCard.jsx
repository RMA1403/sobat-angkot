import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import theme from '../constants/theme.style';

const vw = Dimensions.get('window').width;

export default function DriverCard({
  driverName,
  licensePlate,
  isIncreasing,
  price,
  capacity,
  cashNavigation,
  eMoneyNavigation,
  eWalletNavigation,
}) {
  const paymentOptions = ['Cash', 'e-Money', 'e-Wallet'];
  const navigationMap = {
    Cash: cashNavigation,
    'e-Money': eMoneyNavigation,
    'e-Wallet': eWalletNavigation,
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTop}>
        <View style={styles.angkotNumber}>
          <View style={styles.angkotImageContainer}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('../../assets/angkot-large.png')}
            />
          </View>

          <View style={styles.angkotDesc}>
            <Text style={styles.headerText}>{licensePlate}</Text>
            <Text style={styles.angkotDescText}>Capacity: {capacity}/12</Text>
          </View>
        </View>

        <View style={styles.angkotDriver}>
          <View style={styles.driverImageContainer}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('../../assets/profile-icon.png')}
            />
          </View>

          <View style={styles.driverDesc}>
            <Text style={styles.headerText}>{driverName}</Text>
            <Text style={styles.angkotDescText}>Driver</Text>
          </View>
        </View>
      </View>

      <View style={styles.angkotPrice}>
        <Image
          style={{ width: 12, height: 16, opacity: isIncreasing ? 100 : 0 }}
          source={require('../../assets/red-arrow-up.png')}
        />
        <Text style={styles.priceText}>Rp. {price}</Text>
      </View>

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Choose payment method:</Text>
        <FlatList
          data={paymentOptions}
          horizontal={true}
          ItemSeparatorComponent={<View style={{ width: 0.05 * vw }}></View>}
          renderItem={({ item, idx }) => (
            <TouchableOpacity style={styles.paymentButton} key={idx} onPress={navigationMap[item]}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 46,
  },
  angkotDescText: {
    fontWeight: 700,
    fontSize: 16,
    color: '#A99C9C',
  },
  cardContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 40,
    width: 0.823 * vw,
    overflow: 'hidden',
  },
  cardTop: {
    borderBottomColor: '#C0A6A6',
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  angkotNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  angkotImageContainer: {
    width: 0.344 * vw,
    height: 0.241 * vw,
    zIndex: -10,
  },
  angkotDesc: {
    flex: 1,
  },
  angkotDriver: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  driverImageContainer: {
    width: 0.158 * vw,
    height: 0.158 * vw,
    zIndex: -10,
  },
  driverDesc: {
    marginLeft: 18,
  },
  angkotPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 5,
    paddingRight: 22,
  },
  priceText: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 10,
  },
  paymentContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 23,
    marginBottom: 6,
    alignSelf: 'baseline',
  },
  paymentButton: {
    width: 0.172 * vw,
    height: 29,
    borderRadius: 40,
    backgroundColor: theme.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    elevation: 5,
    marginBottom: 15,
    marginHorizontal: 2,
  },
  buttonText: {
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 22,
  },
});
