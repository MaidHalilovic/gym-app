import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header/Header";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
});
