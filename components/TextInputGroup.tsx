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
    <View>
      <Text>{title}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
