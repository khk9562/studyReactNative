import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import TextInputGroup from "@/components/TextInputGroup";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.ex}>로그인</Text>

      <TextInputGroup title="이름" placeholder="이름을 입력해주세요" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  ex: {
    color: "black",
  },
});
