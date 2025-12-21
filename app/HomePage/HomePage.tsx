import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomePage = () => {
  const router = useRouter();

  const Styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      gap: 30,
    },
    trackingInfo: {
      display: "flex",
      marginTop: 30,
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    btnStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10,
      height: 100,
      width: 385,
    },
    text: {
      display: "flex",
      textAlign: "center",
      fontSize: 15,
    },
    title: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10,
      height: 100,
      width: 385,
      fontSize: 24,
      textAlign: "center",
      color: "white",
      backgroundColor: "#435663",
    },
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.trackingInfo}>
        <Text style={Styles.titleText}>Welcome to GymApp!</Text>
      </View>
      <Text style={Styles.text}>
        Click the tracking tab to set your monthly visits!
      </Text>
      <View style={Styles.btnStyle}>
        <TouchableOpacity
          onPress={() => router.push("../Tracking/VisitsPerMonth")}
        >
          <Text style={Styles.title}>Set your monthly visits</Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.text}>
        Click the exercises tab to make your workout plan!!!
      </Text>
      <View style={Styles.btnStyle}>
        <TouchableOpacity
          onPress={() => router.push("../Exercises/ChooseExercise")}
        >
          <Text style={Styles.title}>Choose exercises for your workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
