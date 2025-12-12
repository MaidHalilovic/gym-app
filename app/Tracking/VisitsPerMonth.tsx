import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";

const VisitsPerMonth = () => {
  const [selectedDate, setselectedDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const today = new Date().toISOString().split("T")[0];

  const Styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    calendar: {
      marginTop: 20,
      marginBottom: 20,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      width: 450,
    },
    btn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#435663",
      width: 120,
      textAlign: "center",
      borderRadius: 10,
    },
  });

  const router = useRouter();
  return (
    <View style={Styles.container}>
      <Text>Calendar</Text>
      <View style={Styles.btn}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "white", padding: 10, fontSize: 16 }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.calendar}>
        <Calendar
          maxDate={today}
          onDayPress={(day) => {
            setIsModalVisible(true);
            setselectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "green",
            },
          }}
        />
      </View>
    </View>
  );
};

export default VisitsPerMonth;
