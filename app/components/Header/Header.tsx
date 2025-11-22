import { Image, StyleSheet, TextInput, View } from "react-native";

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
    searchBox: {
      backgroundColor: "#FFF8E8",
      width: 200,
      height: 50,
      borderRadius: 10,
      marginTop: 90,
    },
    input: {
      padding: 10,
      fontSize: 18,
    },
  });

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
      <View style={styles.searchBox}>
        <TextInput
          placeholder='Search'
          placeholderTextColor={"black"}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Header;
