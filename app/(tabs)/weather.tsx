import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";

export default function WeatherScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.ex}>날씨</Text>
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
