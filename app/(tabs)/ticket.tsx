import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text } from "react-native";

export default function TicketScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.ex}>티켓</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  ex: {
    color: "black",
  },
});
