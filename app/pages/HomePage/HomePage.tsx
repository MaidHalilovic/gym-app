import { StyleSheet, View } from "react-native";
import { Text } from "react-native-gesture-handler";
import VisitsPerMonth from "../Tracking/VisitsPerMonth";

const HomePage = () => {
  const Styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
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
        <Text>Click the tracking tab to set your monthly visits!</Text>
        <VisitsPerMonth />
      </View>
    </View>
  );
};

export default HomePage;
