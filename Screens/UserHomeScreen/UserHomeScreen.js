import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserHomeScreen() {
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    return (
        <View style={styles.container}>
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
});
