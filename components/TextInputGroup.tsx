import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface TextInputGroupProps {
  title: string;
  placeholder: string;
}

export default function TextInputGroup({
  title,
  placeholder,
}: TextInputGroupProps) {
  const [text, setText] = useState<string>("");
  const onChangeText = (text: string) => setText(text);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 12,
  },
});
