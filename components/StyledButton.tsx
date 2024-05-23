import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "@/constants/GlobalStyle";

export default function StyledButton({ text }: { text: string }) {
  return (
    <TouchableOpacity style={GlobalStyles.button}>
      <Text style={GlobalStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
