import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { fontSizes } from "../../styles/theme/typography";
import { colors } from "../../styles/theme/colors";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.black },
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: () => (
                        <Feather name="film" size={fontSizes.icon} />
                    )
                }} />
            <Tabs.Screen
                name="favorites"
                options={{
                    tabBarIcon: () => (
                        <Feather name="heart" size={fontSizes.icon} />
                    )
                }} />
        </Tabs>
    );
}