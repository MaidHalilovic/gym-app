import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const VisitsPerMonth = () => {
  const [selectedDate, setselectedDate] = useState("");

  const router = useRouter();
  return (
    <View>
      <Text>Calendar</Text>
      <Button title='Go back' onPress={() => router.back()} />
      <Calendar
        onDayPress={(day) => {
          setselectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "blue",
          },
        }}
      />
    </View>
  );
};

export default VisitsPerMonth;
