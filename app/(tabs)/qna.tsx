import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import TextInputGroup from "@/components/TextInputGroup";

export default function QNAScreen() {
  return (
    <SafeAreaView>
      <Text>질문/응답</Text>

      <TextInputGroup title="이름" placeholder="이름을 입력해주세요" />
    </SafeAreaView>
  );
}
