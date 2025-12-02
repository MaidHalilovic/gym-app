import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

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
      backgroundColor: "#435663",
    },
    text: {
      display: "flex",
      textAlign: "center",
      fontSize: 15,
    },
    title: { fontSize: 24, marginBottom: 16 },
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
        <Button
          title='Check your process'
          onPress={() => router.push("/Tracking/VisitsPerMonth")}
          color='white'
        />
      </View>
      <Text style={Styles.text}>
        Click the exercies tab to set your favourite exercies
      </Text>
      <View style={Styles.btnStyle}>
        <Button
          title='Choose exercies that you like'
          onPress={() => router.push("../Exercises/ChooseExercise")}
          color='white'
        />
      </View>
    </View>
  );
};

export default HomePage;
