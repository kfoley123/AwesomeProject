import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function AdminNotifications() {
    return (
        <View style={styles.container}>
            <Text> Admin Notifications </Text>
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
