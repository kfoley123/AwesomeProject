import React from "react";

import { StyleSheet, View, Text } from "react-native";

function timeConvert(timestamp) {
    const date = new Date(timestamp * 1000);
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
}

export default function Notifications() {
    const userNotifications = [
        {
            notificationType: "Appointment Approval",
            message: "Your appointment on X date has been approved",
            date: 1678730179,
        },
        {
            notificationType: "Appointment Cancellation",
            message: "Your appointment on X date has been cancelled",
            date: 1678388179,
        },
        {
            notificationType: "Appointment Confirmation",
            message:
                "Your appointment with Josh Dobbs is on X date. You have 24 hours to cancel or reschedule before deposit is forfeited",
            date: 1678388179,
        },
        {
            notificationType: "Appointment Confirmation",
            message: "Your appointment with Josh Dobbs is in 24 hours",
            date: 1678730179,
        },
        {
            notificationType: "Books Opened",
            message: "The booking period for Josh Dobbs has now opened.",
            date: 1678816579,
        },
    ];
    return (
        <View style={styles.container}>
            {userNotifications.map((notification, i) => {
                return (
                    <View key={i} style={styles.notification}>
                        <View>
                            <Text>{notification.notificationType}</Text>
                            <Text>{notification.message}</Text>
                            <Text>{timeConvert(notification.date)}</Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    notification: {
        borderWidth: 0.2,
        borderColor: "lightgrey",
        height: 70,

        padding: 5,
        width: "100%",
    },
});
