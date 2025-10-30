import { Image, View } from "react-native";
import { Text } from "react-native-gesture-handler";

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
      <Image source={require("../../../assets/images/gym-logo.png")} />
    </View>
  );
};

export default Header;
