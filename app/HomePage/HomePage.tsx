import { useRouter } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  const router = useRouter();

  const Styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      gap: 20,
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
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10,
      height: 120,
      width: 385,
    },
    text: {
      display: "flex",
      textAlign: "center",
      fontSize: 15,
    },
    
  // container: {
  //   padding: 16,
  //   paddingBottom: 140,
  // },
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
          color='green'
        />
      </View>
      <Text style={Styles.text}>
        Click the exercies tab to set your favourite exercies
      </Text>
      <View style={Styles.btnStyle}>
        <Button
          title='Choose exercies that you like'
          onPress={() => router.push("../Exercises/ChooseExercise")}
          color='blue'
        />
      </View>
      
    
  


    </View>
  );
};

export default HomePage;
