import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

const Navigator = () => {
  const router = useRouter();

  const Styles = StyleSheet.create({
    navigator: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      width: 250,
      borderRadius: 50,
    },
  });

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 10,
      }}
    >
      <View style={Styles.navigator}>
        <Pressable
          onPress={() => router.push("/HomePage/HomePage")}
          style={{
            padding: 12,
            borderRadius: 50,
          }}
        >
          <Ionicons name='home' size={30} color='black' />
        </Pressable>
        <Pressable
          onPress={() => router.push("/Exercises/ChooseExercise")}
          style={{
            padding: 12,
            borderRadius: 50,
          }}
        >
          <Ionicons name='barbell' size={30} color='black' />
        </Pressable>
        <Pressable
          onPress={() => router.push("/Tracking/VisitsPerMonth")}
          style={{
            padding: 12,
            borderRadius: 50,
          }}
        >
          <Ionicons name='calendar' size={30} color='black' />
        </Pressable>
        <Pressable
          onPress={() => console.log("Profile clicked")}
          style={{
            padding: 12,
            borderRadius: 50,
          }}
        >
          <Ionicons name='person' size={30} color='black' />
        </Pressable>
      </View>
    </View>
  );
};

export default Navigator;
