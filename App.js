import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Modal,
    Alert,
    Text,
    Pressable,
    Button,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
    BottomTabBarHeightCallbackContext,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import DateTimePicker from "@react-native-community/datetimepicker";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <TouchableOpacity onPress={() => console.log("image tapped")}>
                <Image
                    source={{
                        width: 400,
                        height: 400,
                        uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                    }}
                />
            </TouchableOpacity>
            <Button
                title="Click Me"
                onPress={() =>
                    Alert.alert("Title", "My Message", [
                        { text: "Yes" },
                        { text: "No" },
                    ])
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}

function ProfileScreen() {
    const [username, setusername] = useState("set username");
    const [phoneNumber, setPhoneNumber] = useState("set phone number");
    const [email, setEmail] = useState("set email");
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ alignItems: "center", paddingTop: "10%" }}>
            <Image
                source={{
                    uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                }}
                style={{
                    alignSelf: "center",
                    width: 100,
                    height: 100,
                    borderRadius: 100,
                }}
            />

            <Button
                title="edit profile"
                onPress={() => setModalVisible(!modalVisible)}
            />
            <View style={styles.fields}>
                <Text>{username} </Text>
            </View>
            <View style={styles.fields}>
                <Text>{email}</Text>
            </View>
            <View style={styles.fields}>
                <Text>{phoneNumber}</Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text> Edit Profile</Text>
                        <Image
                            source={{
                                uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                            }}
                            style={{
                                alignSelf: "center",
                                width: 100,
                                height: 100,
                                borderWidth: 1,
                                borderColor: "black",
                                borderRadius: 100,
                            }}
                        />
                        <View style={styles.fields}>
                            <Text>{username} </Text>
                        </View>
                        <View style={styles.fields}>
                            <Text>{email}</Text>
                        </View>
                        <View style={styles.fields}>
                            <Text>{phoneNumber}</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function CalendarScreen() {
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState("date");
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const displayDatepicker = () => {
        showMode("date");
    };
    return (
        <>
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

            <View style={styles.container}>
                <Button onPress={displayDatepicker} title="Book Appointment" />
                {isDisplayDate && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={mydate}
                        mode={displaymode}
                        is24Hour={true}
                        display="default"
                        onChange={changeSelectedDate}
                    />
                )}
            </View>
        </>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === "Home") {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? "ios-information-circle"
                                            : "ios-information-circle-outline"
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "Profile") {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? "person-circle-sharp"
                                            : "person-circle-outline"
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "Calendar") {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? "calendar"
                                            : "calendar-outline"
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "tomato",
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ tabBarBadge: 45 }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Calendar" component={CalendarScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    fields: { alignItems: "center", flexDirection: "row" },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        height: "100%",
        width: "100%",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
