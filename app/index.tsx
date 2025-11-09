import React from "react";
import { View } from "react-native";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <HomePage />
    </View>
  );
}
