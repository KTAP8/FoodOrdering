import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}