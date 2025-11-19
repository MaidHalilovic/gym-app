import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const ChooseExercise = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Choose exercies</Text>
      <Button title='Go back' onPress={() => router.back()} />
    </View>
  );
};

export default ChooseExercise;
