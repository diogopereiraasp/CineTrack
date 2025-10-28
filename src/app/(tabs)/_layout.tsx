import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

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
                        <Feather name="film" size={24} color="black" />
                    )
                }} />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Favoritos",
                    tabBarIcon: () => (
                        <Feather name="heart" size={24} color="black" />
                    )
                }} />
        </Tabs>
    );
}