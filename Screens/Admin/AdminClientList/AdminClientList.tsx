import React, { useState } from "react";
import {
    Text,
    ScrollView,
    View,
    StyleSheet,
    Image,
    Modal,
    Pressable,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

export default function AdminClientList() {
    const [clientList, setClientList] = useState([
        {
            username: "Joel Client",
            email: "kortney_foley@hotmail.com",
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
    ]);
    const [modalVisible, setModalVisible] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({});

    const onSubmit = (data) =>
        setClientList([...clientList, { ...data, appointments: [] }]);

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.addClientButton}
                >
                    <Ionicons name="person-add" size={24} color="black" />
                    <Text style={styles.addClientFont}>Add Client</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.title}> Add Client</Text>

                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        placeholder={"Name"}
                                        placeholderTextColor="#a9a9a9"
                                        onChangeText={onChange}
                                        autoCapitalize={"words"}
                                        value={value}
                                    />
                                )}
                                name="username"
                            />
                            {errors.username && <Text>Name is required.</Text>}

                            <Controller
                                control={control}
                                rules={{
                                    maxLength: 100,
                                    required: true,
                                    // eslint-disable-next-line no-useless-escape
                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                }}
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        placeholder={"Email"}
                                        placeholderTextColor="#a9a9a9"
                                        onChangeText={onChange}
                                        keyboardType={"email-address"}
                                        value={value}
                                    />
                                )}
                                name="email"
                            />
                            {errors.email && (
                                <Text>A valid email is required.</Text>
                            )}

                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 9,
                                    maxLength: 10,
                                }}
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        placeholder={"Phone Number"}
                                        placeholderTextColor="#a9a9a9"
                                        keyboardType={"numeric"}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="phoneNumber"
                            />
                            {errors.phoneNumber && (
                                <Text>Valid phone number is required.</Text>
                            )}

                            <View style={styles.buttonContainer}>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        reset();
                                    }}
                                >
                                    <Text style={styles.buttonText}>
                                        Cancel
                                    </Text>
                                </Pressable>

                                <Pressable
                                    style={styles.button}
                                    disabled={Object.keys(errors).length > 0}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        handleSubmit(onSubmit)();
                                        reset();
                                    }}
                                >
                                    <Text style={styles.buttonText}>Done</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

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
                            <View style={styles.clientInfo}>
                                <View style={styles.clientTextContainer}>
                                    <Text style={styles.clientText}>
                                        {client.username}{" "}
                                    </Text>
                                    <Text style={styles.clientText}>
                                        {client.phoneNumber}
                                    </Text>
                                    <TouchableOpacity>
                                        <Text style={styles.textLinkViewMore}>
                                            View More
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.clientAptsContainer}>
                                    {client.appointments.length ? (
                                        client.appointments.length > 1 ? (
                                            <Text
                                                style={styles.upcomingAptText}
                                            >
                                                {client.appointments.length}{" "}
                                                Upcoming Appointments
                                            </Text>
                                        ) : (
                                            <Text
                                                style={styles.upcomingAptText}
                                            >
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
                                        <Text style={styles.textLink}>
                                            Manage
                                        </Text>
                                    </TouchableOpacity>
                                </View>
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
    clientInfo: {
        paddingLeft: 0,
        justifyContent: "space-between",
        flexDirection: "row",
        width: "75%",
    },
    clientTextContainer: { paddingLeft: "5%" },
    clientAptsContainer: { padding: 1 },
    clientText: { padding: 1 },
    textLink: {
        textAlign: "center",
        color: "deepskyblue",
        fontWeight: "600",
        padding: 1,
    },
    textLinkViewMore: {
        color: "deepskyblue",
        fontWeight: "600",
        padding: 1,
    },
    upcomingAptText: {
        maxWidth: 170,
    },
    modalContainer: {
        margin: 20,
        backgroundColor: "whitesmoke",
        paddingHorizontal: 50,
        paddingTop: 60,
        height: "100%",
        width: "100%",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 175,
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    button: {
        backgroundColor: "deepskyblue",
        textAlign: "center",
        borderRadius: 7,
        padding: 10,
        margin: 5,
        elevation: 2,
        width: 75,
    },
    buttonText: { color: "white", fontWeight: "600", textAlign: "center" },
    buttonContainer: { flexDirection: "row", justifyContent: "center" },
    input: {
        backgroundColor: "white",
        borderColor: "black",
        height: 40,
        padding: 10,
        borderRadius: 4,
        margin: 10,
    },
});
