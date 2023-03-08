import React, { useState } from "react";
import {
    Alert,
    Text,
    ScrollView,
    View,
    StyleSheet,
    Image,
    Modal,
    Pressable,
    TextInput,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function AdminClientList() {
    const [selectedClient, setSelectedClient] = useState({
        id: 0,
        username: "",
        email: "",
        phoneNumber: "",
        appointments: [],
    });
    const [clientList, setClientList] = useState([
        {
            id: 1,
            username: "Joel Client",
            email: "kortney_foley@hotmail.com",
            phoneNumber: "5555555556",
            appointments: [
                { date: "Jan 5, 2023", time: "10AM" },
                { date: "Feb 16, 2023", time: "10AM" },
            ],
        },
        {
            id: 2,
            username: "Cammy White",
            email: "fight@me.com",
            phoneNumber: "5555555557",
            appointments: [{ date: "Jan 1, 2023", time: "10AM" }],
        },
        {
            id: 3,
            username: "Bob Ross",
            email: "bob1@me.com",
            phoneNumber: "5555555558",
            appointments: [{ date: "Jan 2, 2023", time: "10AM" }],
        },
        {
            id: 4,
            username: "Mark Smith",
            email: "bob@me.com",
            phoneNumber: "5555555556",
            appointments: [{ date: "Jan 3, 2023", time: "10AM" }],
        },
        {
            id: 5,
            username: "Morrigan Aensland",
            email: "fight@me.com",
            phoneNumber: "5555555557",
            appointments: [
                { date: "Jan 6, 2023", time: "10AM" },
                { date: "Jan 7, 2023", time: "10AM" },
                { date: "Feb 1, 2023", time: "10AM" },
                { date: "Feb 2, 2023", time: "10AM" },
            ],
        },
        {
            id: 6,
            username: "Doug Money",
            email: "bob1@me.com",
            phoneNumber: "5555555558",
            appointments: [{ date: "Jan 4, 2023", time: "10AM" }],
        },
        {
            id: 7,
            username: "Jack White",
            email: "bob@me.com",
            phoneNumber: "5555555556",
            appointments: [
                { date: "Jan 9, 2023", time: "10AM" },
                { date: "Jan 10, 2023", time: "10AM" },
            ],
        },
        {
            id: 8,
            username: "Jean Grey",
            email: "fight@me.com",
            phoneNumber: "5555555557",
            appointments: [
                { date: "Jan 7, 2023", time: "10AM" },
                { date: "Jan 8, 2023", time: "10AM" },
                { date: "Feb 3, 2023", time: "10AM" },
                { date: "Feb 4, 2023", time: "10AM" },
            ],
        },
        {
            id: 9,
            username: "Illyana Rasputin",
            email: "bob1@me.com",
            phoneNumber: "5555555558",
            appointments: [
                { date: "Jan 17, 2023", time: "10AM" },
                { date: "Jan 18 , 2023", time: "10AM" },
                { date: "Jan 5, 2023", time: "10AM" },
            ],
        },
        {
            id: 10,
            username: "Lara Croft",
            email: "bob@me.com",
            phoneNumber: "5555555556",
            appointments: [
                { date: "Jan 11, 2023", time: "10AM" },
                { date: "Jan 12, 2023", time: "10AM" },
                { date: "Jan 13, 2023", time: "10AM" },
                { date: "Jan 14, 2023", time: "10AM" },
            ],
        },
        {
            id: 11,
            username: "Chun Li",
            email: "fight@me.com",
            phoneNumber: "5555555557",
            appointments: [
                { date: "March 1, 2023", time: "10AM" },
                { date: "March 2, 2023", time: "10AM" },
                { date: "March 4, 2023", time: "10AM" },
            ],
        },
        {
            id: 12,
            username: "Bobby Drake",
            email: "bob1@me.com",
            phoneNumber: "5555555558",
            appointments: [
                { date: "Jan 15, 2023", time: "10AM" },
                { date: "Jan 16, 2023", time: "10AM" },
            ],
        },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [clientInfoModalVisible, setClientInfoModalVisible] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({});

    const onSubmit = (data) => {
        setClientList([...clientList, { ...data, appointments: [] }]);
        reset();
    };

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
                    transparent={false}
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
                                    }}
                                >
                                    <Text style={styles.buttonText}>Add</Text>
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
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedClient(client);
                                            setClientInfoModalVisible(
                                                !clientInfoModalVisible
                                            );
                                        }}
                                    >
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

            <Modal
                animationType="slide"
                transparent={false}
                visible={clientInfoModalVisible}
                onRequestClose={() => {
                    setClientInfoModalVisible(!clientInfoModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalContainer}>
                        <Image
                            source={{
                                uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                            }}
                            style={styles.profileImgModal}
                        />

                        <View style={styles.fields}>
                            <Text style={styles.usernameModal}>
                                {selectedClient.username}
                            </Text>
                        </View>

                        <View style={styles.fields}>
                            <MaterialIcons
                                name="local-phone"
                                style={styles.modalIcon}
                            />

                            <Text>{selectedClient.phoneNumber}</Text>
                        </View>
                        <View style={styles.fields}>
                            <MaterialIcons
                                name="email"
                                style={styles.modalIcon}
                            />
                            <Text>{selectedClient.email}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => {
                                setClientInfoModalVisible(
                                    !clientInfoModalVisible
                                );
                                reset();
                            }}
                        >
                            <Text style={styles.backButtonText}>
                                <MaterialIcons name="chevron-left" />
                                Back
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() =>
                                Alert.alert(
                                    "Remove Client",
                                    "Are you sure you want to permanently remove this client?",
                                    [
                                        {
                                            text: "Yes",
                                            onPress: () => {
                                                setClientList((prevData) =>
                                                    prevData.filter(
                                                        (user) =>
                                                            user.id !==
                                                            selectedClient.id
                                                    )
                                                ),
                                                    reset();
                                                setClientInfoModalVisible(
                                                    !clientInfoModalVisible
                                                );
                                            },
                                        },
                                        { text: "No" },
                                    ]
                                )
                            }
                        >
                            <Text style={styles.buttonText}>Remove</Text>
                        </TouchableOpacity>

                        <Seperator />
                        <ScrollView style={{ width: "100%" }}>
                            <View style={styles.aptsHeaders}>
                                <Text style={styles.subtitle}>
                                    Upcoming Appointments
                                </Text>
                                {selectedClient.appointments.map(
                                    (appointment, i) => {
                                        return (
                                            <View
                                                style={styles.appointmentInfo}
                                                key={i}
                                            >
                                                <Text>
                                                    {appointment.date} -{" "}
                                                    {appointment.time}
                                                </Text>
                                                <TouchableOpacity key={i}>
                                                    <Text
                                                        style={styles.textLink}
                                                    >
                                                        Manage
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }
                                )}
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        console.log("Calendar Open ");
                                    }}
                                >
                                    <Text style={styles.buttonText}>Book</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.aptsHeaders}>
                                <Seperator />

                                <Text style={styles.subtitle}>
                                    Past Appointments
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
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
        maxWidth: 165,
    },
    modalContainer: {
        margin: 20,
        backgroundColor: "whitesmoke",
        paddingHorizontal: 50,
        paddingTop: 60,
        alignItems: "center",
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
    backButton: {
        backgroundColor: "deepskyblue",
        textAlign: "center",
        borderRadius: 7,
        padding: 10,
        margin: 5,
        elevation: 2,
        width: 75,
        position: "absolute",
        top: 50,
        left: 15,
    },
    removeButton: {
        backgroundColor: "grey",
        textAlign: "center",
        borderRadius: 7,
        padding: 10,
        margin: 5,
        elevation: 2,
        width: 75,
    },

    backButtonText: { color: "white", fontWeight: "600" },
    buttonText: {
        color: "white",
        fontWeight: "600",
        textAlign: "center",
    },
    buttonContainer: { flexDirection: "row", justifyContent: "center" },
    input: {
        backgroundColor: "white",
        borderColor: "black",
        height: 40,
        padding: 10,
        borderRadius: 4,
        margin: 10,
        width: 275,
    },
    fields: {
        flexDirection: "row",
        padding: "1%",
        textAlign: "justify",
    },
    usernameModal: {
        fontSize: 18,
        fontWeight: "600",
        paddingBottom: 10,
    },
    modalIcon: { fontSize: 20, color: "black", paddingRight: 5 },
    profileImgModal: {
        width: 175,
        height: 175,
        borderRadius: 100,
        marginTop: 15,
        marginBottom: 5,
    },
    subtitle: { fontSize: 15, fontWeight: "500", paddingVertical: 20 },
    aptsHeaders: { alignItems: "center", width: "100%" },
    appointmentInfo: { padding: 5 },
});

const seperatorStyles: ViewStyle = {
    height: 1,
    width: "100%",
    backgroundColor: "#a9a9a9",
    marginVertical: 10,
};

const Seperator = () => <View style={seperatorStyles} />;
