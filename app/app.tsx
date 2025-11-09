import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import "react-native-gesture-handler";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Tracking from "./pages/Tracking/VisitsPerMonth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='VisitsPerMonth' component={Tracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
