import { Image, StyleSheet, SafeAreaView, View, Text } from "react-native";
import CustomCalendar from "@/components/cutomcalendar";
import Splash from "@/components/Splash";
import TextInputGroup from "@/components/TextInputGroup";
import { useState } from "react";

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.ex}>홈</Text> */}
      {isLoggedIn ? <CustomCalendar /> : <Splash />}
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
