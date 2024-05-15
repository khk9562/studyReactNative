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
        name="ticket"
        options={{
          title: "티켓",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "ticket" : "ticket-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: "날씨",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "sunny" : "sunny-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
