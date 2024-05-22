import { StyleProp } from "react-native";
// interface ITextStyle {
//   title: {
//     fontSize: number;
//     fontWeight: string;
//     color: string;
//     textAlign: string;
//     marginBottom: number;
//   };
//   subtitle: {
//     fontSize: number;
//     fontWeight: string;
//     color: string;
//     textAlign: string;
//     marginBottom: number;
//   };
//   paragraph: {
//     fontSize: number;
//     color: string;
//     textAlign: string;
//     marginBottom: number;
//   };
//   button: any;
//   buttonText: {
//     fontSize: number;
//     fontWeight: string;
//     color: string;
//   };
// }

export const TextStyles: StyleProp<any> = {
  title: {
    fontSize: 36,
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
    marginTop: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6366F1",
  },
};
