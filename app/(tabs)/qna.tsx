import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import TextInputGroup from "@/components/TextInputGroup";
import { GlobalStyles } from "@/constants/GlobalStyle";

export default function QNAScreen() {
  return (
    <SafeAreaView>
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.pageTitle}>질문/응답</Text>
        <TextInputGroup title="이름" placeholder="이름을 입력해주세요" />
      </View>
    </SafeAreaView>
  );
}
