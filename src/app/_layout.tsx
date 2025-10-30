import { Stack, useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../styles/theme/colors';

export default function RootLayout() {

    const router = useRouter();

    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="Details" options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerTintColor: colors.textPrimary,
                    headerBackTitle: "",
                    headerBackButtonDisplayMode: 'minimal',
                }} />
            </Stack>
        </SafeAreaProvider>
    );
}