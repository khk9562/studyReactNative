import { Image, StyleSheet, SafeAreaView, View, Text } from "react-native";
import CustomCalendar from "@/components/cutomcalendar";
import Splash from "@/components/Splash";
import TextInputGroup from "@/components/TextInputGroup";
import { useState } from "react";
import { GlobalStyles } from "@/constants/GlobalStyle";

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <SafeAreaView style={GlobalStyles.container}>
      {isLoggedIn ? <CustomCalendar /> : <Splash />}
    </SafeAreaView>
  );
}
