import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const VisitsPerMonth = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Calendar</Text>
      <Button title='Go back' onPress={() => router.back()} />
    </View>
  );
};

export default VisitsPerMonth;
