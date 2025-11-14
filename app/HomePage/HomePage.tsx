import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

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
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.trackingInfo}>
        <Text style={Styles.titleText}>Welcome to GymApp!</Text>
      </View>
      <View>
        {/* <Text>Click the tracking tab to set your monthly visits!</Text> */}
        <Button
          title='Check your process'
          onPress={() => router.push("/Tracking/VisitsPerMonth")}
          color='green'
        />
      </View>
    </View>
  );
};

export default HomePage;
