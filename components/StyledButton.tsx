import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function StyledButton({ text }: { text: string }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
