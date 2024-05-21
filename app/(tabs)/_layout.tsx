import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "캘린더",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar-number" : "calendar-number-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qna"
        options={{
          title: "질문과 답변",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bulb" : "bulb-outline"}
              // name={focused ? "sparkles" : "sparkles-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "마이페이지",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
