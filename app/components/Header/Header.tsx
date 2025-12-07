import { Image, StyleSheet, View } from "react-native";

const Header = () => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "#007E6E",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      gap: 80,
      height: 180,
    },
    input: {
      padding: 10,
      fontSize: 18,
    },
  }); //need to style header (remove the search and add the button for search and add profile button for progile

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
      <View></View>
    </View>
  );
};

export default Header;
