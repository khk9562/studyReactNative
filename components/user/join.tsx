import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import TextInputGroup from "@/components/TextInputGroup";
import { GlobalStyles } from "@/constants/GlobalStyle";

export default function Join() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.pageTitle}>회원가입</Text>

      <TextInputGroup title="이름" placeholder="이름을 입력해주세요" />
      <TextInputGroup title="생년월일" placeholder="19980217" />
      <TextInputGroup title="아이디" placeholder="아이디를 입력해주세요" />
      <TextInputGroup title="비밀번호" placeholder="비밀번호를 입력해주세요" />
      <TextInputGroup
        title="비밀번호 확인"
        placeholder="비밀번호를 입력해주세요"
      />
    </View>
  );
}
