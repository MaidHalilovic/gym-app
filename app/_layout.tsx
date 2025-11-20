import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header/Header";
import Navigator from "./Navigator/Navigator";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1, paddingBottom: 100 }}>
        <Slot />
      </View>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
});
