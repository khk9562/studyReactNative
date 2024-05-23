import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Link } from "expo-router";
import StyledButton from "../StyledButton";
import { GlobalStyles } from "@/constants/GlobalStyle";

export default function Question({ text }: { text: string }) {
  return (
    <View style={GlobalStyles.questionBox}>
      <Text style={GlobalStyles.question}>{text}</Text>
    </View>
  );
}
