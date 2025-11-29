import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const VisitsPerMonth = () => {
  const [selectedDate, setselectedDate] = useState("");

  const Styles = StyleSheet.create({
    container: {
      display: "flex",
    },
  });

  const router = useRouter();
  return (
    <View style={Styles.container}>
      <Text>Calendar</Text>
      <Button title='Go back' onPress={() => router.back()} />
      {/* <View style={Styles.btn}>
        <Button title='Add +1 Visit' color={""} />
      </View> */}
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
