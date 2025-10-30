import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../styles/theme/colors';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="Details" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    );
}