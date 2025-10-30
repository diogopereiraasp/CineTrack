import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { fontSizes } from "@/styles/theme/typography";
import { colors } from "@/styles/theme/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="film"
              size={focused ? fontSizes.icon + 4 : fontSizes.icon}
              color={focused ? colors.primary : colors.textPrimary}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="heart"
              size={focused ? fontSizes.icon + 4 : fontSizes.icon}
              color={focused ? colors.primary : colors.textPrimary}
            />
          ),
        }}
      />
    </Tabs>
  );
}
