import { StyleSheet, View } from "react-native";
import NewInput from "../../components/NewInput.jsx"

export default function PickupInputSection() {
  return (
    <View>
      <NewInput isBlue={true}/>
      <NewInput isOrange={true}/>
    </View>
  )
}