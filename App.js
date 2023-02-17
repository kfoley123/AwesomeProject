import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Alert,
    Text,
    Button,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings!</Text>
        </View>
    );
}

function CalendarScreen() {
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            {upcomingAppointments.length ? (
                <Text>You have {upcomingAppointments.length} appointments</Text>
            ) : (
                <Text>You have no upcoming appointments</Text>
            )}
        </View>
    );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

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
                        } else if (route.name === "Settings") {
                            return (
                                <Ionicons
                                    name={
                                        focused ? "ios-list-sharp" : "ios-list"
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
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Calendar" component={CalendarScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
