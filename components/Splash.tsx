import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StyledButton from "./StyledButton";

export default function Splash() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>자기소개서</Text>
        <Text style={styles.subtitle}>자아 찾기</Text>
        <Text style={styles.paragraph}>자기소개서를 작성하며</Text>
        <Text style={styles.paragraph}>내 안의 가능성을 펼쳐보세요.</Text>
        <StyledButton text="시작하기" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
    backgroundColor:
      "linear-gradient(49deg, rgba(99,102,241,1) 43%, rgba(147,51,234,1) 100%)",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 16, // 기본값, sm: 36, md: 40
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 32,
  },
  paragraph: {
    fontSize: 18, // md: 20
    color: "#DCDCE0",
    textAlign: "center",
    marginBottom: 4,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 2, // Android용 그림자
    shadowColor: "#6366F1", // iOS용 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS용 그림자 오프셋
    shadowOpacity: 0.25, // iOS용 그림자 투명도
    shadowRadius: 3.84, // iOS용 그림자 반경
    marginTop: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6366F1",
  },
});
