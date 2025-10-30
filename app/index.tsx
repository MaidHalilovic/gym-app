import { NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

enableScreens();

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <View>
      <NavigationIndependentTree>
        <Header />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={HomePage} />
        </Stack.Navigator>
      </NavigationIndependentTree>
    </View>
  );
}
