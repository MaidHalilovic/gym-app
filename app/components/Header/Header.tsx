import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

const Header = () => {
  const router = useRouter();

  const styles = StyleSheet.create({
    header: {
      backgroundColor: "#007E6E",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      gap: 120,
      height: 180,
    },
    input: {
      padding: 10,
      fontSize: 18,
    },
    icons: {
      display: "flex",
      flexDirection: "row",
      gap: 50,
      marginTop: 100,
      height: 40,
    },
  }); //need to style header (remove the search and add tfontSize: 24,he button for search and add profile button for progile

  return (
    <View style={styles.header}>
      <View>
        <Image
          source={require("../../../assets/images/gympic.png")}
          style={{
            marginTop: 70,
            marginLeft: 20,
            width: 80,
            height: 80,
          }}
        />
      </View>
      <View style={styles.icons}>
        <Ionicons name='search' color={"white"} size={35} />
        //search button
        <Ionicons
          name='person'
          color={"white"}
          size={35}
          onPress={() => router.push("/")} //profile button
        />
      </View>
    </View>
    //need to make profile button functional when login form and profile page are created
  );
};

export default Header;
