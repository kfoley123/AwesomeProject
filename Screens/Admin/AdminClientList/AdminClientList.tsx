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
            appointments: [{ date: "dog" }, { date: "cat" }],
        },
        {
            username: "Cammy White",
            email: "fight@me.com",
            phoneNumber: "5555555557",
            appointments: [{}],
        },
        {
            username: "Bob Ross",
            email: "bob1@me.com",
            phoneNumber: "5555555558",
            appointments: [],
        },
        {
            username: "Joel Client",
            email: "bob@me.com",
            phoneNumber: "5555555556",
            appointments: [],
        },
        {
            username: "Cammy White",
            email: "fight@me.com",
            phoneNumber: "5555555557",
            appointments: [
                { date: "dog" },
                { date: "cat" },
                { date: "dog" },
                { date: "cat" },
            ],
        },
        {
            username: "Bob Ross",
            email: "bob1@me.com",
            phoneNumber: "5555555558",
            appointments: [],
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
                            <View style={styles.clientAptsContainer}>
                                {client.appointments.length ? (
                                    client.appointments.length > 1 ? (
                                        <Text style={styles.upcomingAptText}>
                                            {client.appointments.length}{" "}
                                            Upcoming Appointments
                                        </Text>
                                    ) : (
                                        <Text style={styles.upcomingAptText}>
                                            {" "}
                                            1 Upcoming Appointment
                                        </Text>
                                    )
                                ) : (
                                    <Text style={styles.upcomingAptText}>
                                        No Upcoming Appointments
                                    </Text>
                                )}

                                <TouchableOpacity>
                                    <Text style={styles.upcomingAptManage}>
                                        Manage
                                    </Text>
                                </TouchableOpacity>
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
        justifyContent: "space-evenly",
    },
    profileImg: {
        width: 75,
        height: 75,
        borderRadius: 100,
    },
    clientTextContainer: { paddingLeft: "5%" },
    clientAptsContainer: {},
    clientText: { padding: 1 },
    upcomingAptManage: {
        textAlign: "center",
        color: "deepskyblue",
        fontWeight: "600",
    },
    upcomingAptText: {
        maxWidth: 165,
    },
});
