import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function AdminHome() {
    return (
        <View style={styles.container}>
            <Text> Admin Home </Text>
            {/* week view of appointments */}
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
