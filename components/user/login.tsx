import { Text, SafeAreaView } from "react-native";
import StyledButton from "../StyledButton";
import { GlobalStyles } from "@/constants/GlobalStyle";

export default function Login() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.pageTitle}>로그인</Text>

      <StyledButton text="로그인" />
      <StyledButton text="회원가입" />
    </SafeAreaView>
  );
}
