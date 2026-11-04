import { Stack } from "expo-router";
import { ThemeContext } from "../Context/ContextTheme";
import { EconomyContext } from "../Context/ContextEconomy";
export default function RootLayout() {
    return (
        <ThemeContext>
            <EconomyContext>


                <Stack screenOptions={{
                    headerShown: true
                }}>
                    <Stack.Screen name="index" options={{ title: 'home' }}></Stack.Screen>
                    <Stack.Screen name="about" options={{ title: 'Agricultura' }}></Stack.Screen>

                </Stack>
            </EconomyContext>
        </ThemeContext>
    )

}