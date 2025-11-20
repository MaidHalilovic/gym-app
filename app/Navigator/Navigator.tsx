import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const Navigator = () => {
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
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <View style={Styles.navigator}>
        <Pressable
          onPress={() => console.log("Clicked")}
          style={{
            padding: 12,
            borderRadius: 50,
          }}
        >
          <Ionicons name='home' size={30} color='black' />
        </Pressable>
        <Pressable
          onPress={() => console.log("Clicked")}
          style={{
            padding: 12,
            borderRadius: 50,
          }}
        >
          <Ionicons name='barbell' size={30} color='black' />
        </Pressable>
        <Pressable
          onPress={() => console.log("Clicked")}
          style={{
            padding: 12,
            borderRadius: 50,
          }}
        >
          <Ionicons name='calendar' size={30} color='black' />
        </Pressable>
        <Pressable
          onPress={() => console.log("Clicked")}
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
