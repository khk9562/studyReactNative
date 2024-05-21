import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text } from "react-native";
import TextInputGroup from "@/components/TextInputGroup";

export default function QNAScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.ex}>질문/응답</Text>

      <TextInputGroup title="이름" placeholder="이름을 입력해주세요" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  ex: {
    color: "black",
  },
});
