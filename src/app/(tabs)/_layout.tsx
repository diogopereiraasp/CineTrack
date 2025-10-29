import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { fontSizes } from "../../styles/theme/typography";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: () => (
                        <Feather name="film" size={fontSizes.icon} color="black" />
                    )
                }} />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Favoritos",
                    tabBarIcon: () => (
                        <Feather name="heart" size={fontSizes.icon} color="black" />
                    )
                }} />
        </Tabs>
    );
}