import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Link } from "expo-router";
import StyledButton from "../StyledButton";

export default function CustomCalendar() {
  LocaleConfig.locales.ko = {
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = "ko";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.box}>
          <Text style={styles.subtitle}>오늘의 질문</Text>
          <Text style={styles.title}>오늘 하루도 안녕하신가요?</Text>
        </View>
        <Calendar
          style={styles.calendarBox}
          onDayPress={(day) => {
            console.log("날짜클릭", day);
          }}
          firstDay={1}
          hideExtraDays={true}
          monthFormat="M월"
        />
        <View
          style={{
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Link href="qna">
            <StyledButton text="오늘의 질문에 답하기" />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
    backgroundColor:
      "linear-gradient(49deg, rgba(99,102,241,1) 43%, rgba(147,51,234,1) 100%)",
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 12,
  },
  calendarBox: {
    marginTop: 30,
    // width: "98%",
    // height: "98%",
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 8,
  },
  box: {
    marginTop: 70,
    // marginBottom: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 16, // 기본값, sm: 36, md: 40
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 32,
  },
  paragraph: {
    fontSize: 18, // md: 20
    color: "#DCDCE0",
    textAlign: "center",
    marginBottom: 4,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 2, // Android용 그림자
    shadowColor: "#6366F1", // iOS용 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS용 그림자 오프셋
    shadowOpacity: 0.25, // iOS용 그림자 투명도
    shadowRadius: 3.84, // iOS용 그림자 반경
    marginTop: 34,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6366F1",
  },
});
