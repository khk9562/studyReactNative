import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import TextInputGroup from "@/components/TextInputGroup";
import StyledButton from "@/components/StyledButton";
import { GlobalStyles } from "@/constants/GlobalStyle";
import Question from "@/components/question";

export default function QNAScreen() {
  return (
    <SafeAreaView>
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.pageTitle}>질문/응답</Text>
        <Question text="오늘은 안녕하신가요?" />
        <StyledButton text="넘어가기" />
        <TextInputGroup title="" placeholder="답변을 입력해주세요" />
        <StyledButton text="확인" />
      </View>
    </SafeAreaView>
  );
}
