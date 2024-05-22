import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StyledButton from "./StyledButton";
import { GlobalStyles } from "@/constants/GlobalStyle";

export default function Splash() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.content}>
        <Text style={GlobalStyles.title}>자기소개서</Text>
        <Text style={GlobalStyles.subtitle}>자아 찾기</Text>
        <Text style={GlobalStyles.paragraph}>자기소개서를 작성하며</Text>
        <Text style={GlobalStyles.paragraph}>내 안의 가능성을 펼쳐보세요.</Text>
        <StyledButton text="시작하기" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
