import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Exercises from "./Exercises/ChooseExercise";
import HomePage from "./HomePage/HomePage";
import Navigator from "./Navigator/Navigator";
import Tracking from "./Tracking/VisitsPerMonth";
import Login from "./LoginForm/Login";

const Stack = createNativeStackNavigator();

const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const user localStorage.getItem("user");
  if (user) {
    setIsLoggedIn(true);
  } 
}, []);

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
