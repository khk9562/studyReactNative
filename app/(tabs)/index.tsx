import { Image, StyleSheet, SafeAreaView, View, Text } from "react-native";
import Splash from "@/components/Splash";
import TextInputGroup from "@/components/TextInputGroup";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.ex}>홈</Text> */}
      <Splash />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  ex: {
    color: "black",
  },
});
