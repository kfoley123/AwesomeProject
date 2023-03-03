import React from "react";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function AdminClientList() {
    const clientList = [
        {
            username: "Joel Client",
            email: "bob@me.com",
            phoneNumber: "5555555556",
        },
        {
            username: "Cammy White",
            email: "fight@me.com",
            phoneNumber: "5555555557",
        },
        {
            username: "Bob Ross",
            email: "bob1@me.com",
            phoneNumber: "5555555558",
        },
        {
            username: "Joel Client",
            email: "bob@me.com",
            phoneNumber: "5555555556",
        },
        {
            username: "Cammy White",
            email: "fight@me.com",
            phoneNumber: "5555555557",
        },
        {
            username: "Bob Ross",
            email: "bob1@me.com",
            phoneNumber: "5555555558",
        },
    ];
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addClientButton}>
                <Ionicons name="person-add" size={24} color="black" />
                <Text style={styles.addClientFont}>Add Client</Text>
            </TouchableOpacity>

            <ScrollView style={styles.clientListContainer}>
                {clientList.map((client, i) => {
                    return (
                        <View style={styles.client} key={i}>
                            <Image
                                source={{
                                    uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                                }}
                                style={styles.profileImg}
                            />
                            <View style={styles.clientTextContainer}>
                                <Text style={styles.clientText}>
                                    {client.username}{" "}
                                </Text>
                                <Text style={styles.clientText}>
                                    {client.email}
                                </Text>
                                <Text style={styles.clientText}>
                                    {client.phoneNumber}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
    },
    addClientButton: { alignItems: "center", padding: 15 },
    addClientFont: { fontWeight: "600" },
    clientListContainer: { width: "100%" },
    client: {
        borderWidth: 0.2,
        borderColor: "grey",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
    },
    profileImg: {
        width: 75,
        height: 75,
        borderRadius: 100,
    },
    clientTextContainer: { paddingLeft: "10%" },
    clientText: { padding: 1 },
});
