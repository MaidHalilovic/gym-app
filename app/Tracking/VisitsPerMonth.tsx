import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const VisitsPerMonth = () => {
  const router = useRouter();
  return (
    <View>
      <Text>caooo</Text>
      <Button
        title='Go back'
        onPress={() => router.push("/HomePage/HomePage")}
      />
    </View>
  );
};

export default VisitsPerMonth;
