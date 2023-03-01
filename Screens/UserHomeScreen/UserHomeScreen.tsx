import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    Pressable,
    View,
    TouchableOpacity,
} from "react-native";
// TODO
// eslint-disable-next-line react/prop-types
export default function UserHomeScreen({ navigation }) {
    const [upcomingAppointments] = useState([
        { date: "July 9th", startTime: 10, endTime: 5, images: "", notes: "" },
        { date: "Aug 9th", startTime: 10, endTime: 5, images: "", notes: "" },
        { date: "Sept 10th", startTime: 10, endTime: 5, images: "", notes: "" },
        { date: "Oct 4th", startTime: 10, endTime: 5, images: "", notes: "" },
    ]);

    const [waitlistRequests] = useState([]);
    return (
        <View style={styles.container}>
            <View style={styles.upcomingAppointments}>
                <Text style={styles.header}>Upcoming Appointments:</Text>
                {upcomingAppointments.length ? (
                    upcomingAppointments.map((appointment, i) => {
                        return (
                            <Text key={i}>
                                {appointment.date} {appointment.startTime}-
                                {appointment.endTime}
                            </Text>
                        );
                    })
                ) : (
                    <Text>You have no upcoming appointments</Text>
                )}

                <Pressable style={styles.homeButtons}>
                    <Text style={styles.buttonText}>Book Appointment</Text>
                </Pressable>
            </View>

            <View
                style={{
                    flex: 1,

                    alignItems: "center",
                }}
            >
                <Text style={styles.header}> Waitlist Requests</Text>
                <Text> You will be notified by email.</Text>

                <TouchableOpacity
                    // eslint-disable-next-line react/prop-types
                    onPress={() => navigation.navigate("Settings")}
                >
                    <Text
                        style={{
                            color: "deepskyblue",
                            fontWeight: "400",
                        }}
                    >
                        Update your notification preferences
                    </Text>
                </TouchableOpacity>
                {waitlistRequests.length ? (
                    <Text> Tues Dec 5</Text>
                ) : (
                    <>
                        <Text style={styles.noWaitlist}>
                            No Waitlist Requests
                        </Text>
                        <Pressable style={styles.homeButtons}>
                            <Text style={styles.buttonText}>
                                Add Waitlist Request
                            </Text>
                        </Pressable>
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    upcomingAppointments: {
        flex: 1,

        alignItems: "center",
    },
    header: { fontSize: 18, fontWeight: "600", paddingVertical: 12 },
    homeButtons: {
        backgroundColor: "deepskyblue",
        padding: 10,
        borderRadius: 5,
        marginVertical: 15,
    },
    buttonText: { color: "white", fontWeight: "500" },
    noWaitlist: { fontSize: 18, paddingVertical: 15 },
});
