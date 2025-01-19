import { Slot, Stack } from "expo-router";
import "../assets/global.css"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
