import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import "react-native-gesture-handler";
import Exercises from "./Exercises/ChooseExercise";
import HomePage from "./HomePage/HomePage";
import Navigator from "./Navigator/Navigator";
import Tracking from "./Tracking/VisitsPerMonth";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='VisitsPerMonth' component={Tracking} />
        <Stack.Screen name='Exercies' component={Exercises} />
      </Stack.Navigator>
      <Footer />
      <Navigator />
    </NavigationContainer>
  );
}
