import { useState } from "react";
import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";

export default function UserHomeScreen() {
    const [upcomingAppointments, setUpcomingAppointments] = useState([
        { date: "July 5th", startTime: 10, endTime: 5, images: "", notes: "" },
        { date: "Aug 9th", startTime: 10, endTime: 5, images: "", notes: "" },
    ]);
    const [waitlistRequests, setWaitlistRequests] = useState([]);
    return (
        <View style={styles.container}>
            <View style={styles.upcomingAppointments}>
                <Text style={styles.header}>Upcoming Appointments:</Text>
                {upcomingAppointments.length ? (
                    <Text> Tues Dec 5</Text>
                ) : (
                    <Text>You have no upcoming appointments</Text>
                )}
            </View>

            <View
                style={{
                    flex: 1,

                    alignItems: "center",
                }}
            >
                <Text style={styles.header}> Waitlist Requests</Text>
                <Text> You will be notified by email.</Text>
                {/* TODO: add link to setting view or modal */}
                <TouchableOpacity
                    onPress={() => console.log("update notifications tapped")}
                >
                    <Text
                        style={{
                            color: "007AFF",
                        }}
                    >
                        Update your notifaction preferences
                    </Text>
                </TouchableOpacity>
                {waitlistRequests.length ? (
                    <Text> Tues Dec 5</Text>
                ) : (
                    <>
                        <Text>No Waitlist Requests</Text>
                        <Button title="Add a Waitlist Request" />
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
    header: { fontSize: 22, fontWeight: "500", paddingVertical: 12 },
});
