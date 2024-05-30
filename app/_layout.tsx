import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
// import HomeScreen from "./(tabs)";

// const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Prentendard200: require("../assets/fonts/Pretendard-Light.otf"),
    Prentendard400: require("../assets/fonts/Pretendard-Regular.otf"),
    Prentendard500: require("../assets/fonts/Pretendard-Medium.otf"),
    Prentendard600: require("../assets/fonts/Pretendard-Bold.otf"),
    Prentendard800: require("../assets/fonts/Pretendard-Black.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={HomeScreen} name="Home" />
        </Stack.Navigator>
      </NavigationContainer> */}
    </ThemeProvider>
  );
}
