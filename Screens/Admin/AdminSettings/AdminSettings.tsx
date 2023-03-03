import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function AdminSettings() {
    return (
        <View style={styles.container}>
            <Text> Admin Settings </Text>
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
