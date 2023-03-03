import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function AdminCalendar() {
    return (
        <View style={styles.container}>
            <Text> Admin Calendar </Text>
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
