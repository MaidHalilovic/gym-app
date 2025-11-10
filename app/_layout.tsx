import { Stack } from "expo-router";
import { View } from "react-native";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

export default function RootLayout() {
  <Stack screenOptions={{ headerShown: false }} />;
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <HomePage />
    </View>
  );
}
