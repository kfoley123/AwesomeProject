import { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function UserCalendar() {
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
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
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {upcomingAppointments.length ? (
                    <Text>
                        You have {upcomingAppointments.length} appointment(s)
                    </Text>
                ) : (
                    <Text>You have no upcoming appointments</Text>
                )}
            </View>

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
    button: {
        backgroundColor: "pink",
        borderRadius: 20,
        padding: 10,
        margin: 5,
        elevation: 2,
    },
    title: { fontSize: "20%", fontWeight: "bold", padding: "2%" },
    fields: { alignItems: "center", flexDirection: "row", padding: "1%" },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        height: "100%",
        width: "100%",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
