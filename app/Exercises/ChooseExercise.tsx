import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ChooseExercise = () => {
  const router = useRouter();

  const Styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    btn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#435663",
      width: 120,
      textAlign: "center",
      borderRadius: 10,
    },
  });

  return (
    <View style={Styles.container}>
      <Text>Choose exercies</Text>
      <View style={Styles.btn}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "white", padding: 10, fontSize: 16 }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseExercise;
