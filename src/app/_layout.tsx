import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '@/styles/theme/colors';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    });

    useEffect(() => {
        async function hideSplash() {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }
        hideSplash();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // ou algum loading
    }

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                        <Stack.Screen name="details" options={{
                            headerTransparent: true,
                            headerTitle: '',
                            headerTintColor: colors.textPrimary,
                            headerBackTitle: "",
                            headerBackButtonDisplayMode: 'minimal',
                        }} />
                    </Stack>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
}