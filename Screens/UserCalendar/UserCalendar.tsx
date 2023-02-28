import { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function UserCalendar() {
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState("date");
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const displayDatepicker = () => {
        showMode("date");
    };
    return (
        <>
            <View style={styles.container}>
                <Button onPress={displayDatepicker} title="Book Appointment" />
                {isDisplayDate && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={mydate}
                        mode={displaymode}
                        is24Hour={true}
                        display="default"
                        onChange={changeSelectedDate}
                    />
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
