import { Slot } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigator from "./Navigator/Navigator";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Slot />
        <Footer />
      </ScrollView>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
});
