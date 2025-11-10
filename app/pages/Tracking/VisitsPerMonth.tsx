import { useRouter } from "expo-router";
import { Button, Text, useColorScheme, View } from "react-native";

const VisitsPerMonth = () => {
  const router = useRouter();
  return (
    <View>
      <Text>caooo</Text>
      <Button
        title='Go back'
        onPress={() => router.push("/pages/HomePage/HomePage")}
      />
    </View>
  );
};

export default VisitsPerMonth;
