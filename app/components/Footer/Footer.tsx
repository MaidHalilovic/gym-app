import { Ionicons } from "@expo/vector-icons";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

const Footer = () => {
  const Styles = StyleSheet.create({
    conatiner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 40,
      backgroundColor: "#D7C097",
      height: 200,
    },
    icons: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
    },
    text: {
      marginTop: 20,
    },
  });

  return (
    <View style={Styles.conatiner}>
      <View style={Styles.text}>
        <Text>Informations</Text>
      </View>
      <View>
        <Pressable style={Styles.icons}>
          <Ionicons
            onPress={() => Linking.openURL(`https://github.com/MaidHalilovic`)}
            name='logo-github'
            size={40}
            color='black'
          />
          <Ionicons
            onPress={() =>
              Linking.openURL(
                `https://www.linkedin.com/in/maid-halilovic-7a8536392/`
              )
            }
            name='logo-linkedin'
            size={40}
            color='black'
          />
          <Ionicons
            onPress={() =>
              Linking.openURL(`https://www.instagram.com/maidhalilovic72/`)
            }
            name='logo-instagram'
            size={40}
            color='black'
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Footer;
