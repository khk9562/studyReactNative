import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.ex}>마이페이지</Text>
    </SafeAreaView>
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
