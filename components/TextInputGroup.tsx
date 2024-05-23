import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { GlobalStyles } from "@/constants/GlobalStyle";

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
    <View style={GlobalStyles.textInputGroupContainer}>
      <Text style={GlobalStyles.textInputGroupTitle}>{title}</Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
}
