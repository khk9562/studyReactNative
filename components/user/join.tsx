import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import TextInputGroup from "@/components/TextInputGroup";
import { TextStyles } from "@/constants/TextStyle";

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={TextStyles.title}>회원가입</Text>

      <TextInputGroup title="이름" placeholder="이름을 입력해주세요" />
    </View>
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
