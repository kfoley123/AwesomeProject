import { Pressable, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "./Screens/Notifications/Notifications";
import UserProfile from "./Screens/UserProfile/UserProfile";
import UserCalendar from "./Screens/UserCalendar/UserCalendar";
import UserHomeScreen from "./Screens/UserHomeScreen/UserHomeScreen";
import UserSettings from "./Screens/UserSettings/UserSettings";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getHeaderTitle(route) {
    return getFocusedRouteNameFromRoute(route);
}

function TabsComponent({ navigation }) {
    navigation.setOptions();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === "Notifications") {
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
                                name={focused ? "calendar" : "calendar-outline"}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === "Home") {
                        return (
                            <Ionicons
                                name={focused ? "home-sharp" : "home-outline"}
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
                component={UserHomeScreen}
                props={{ navigation }}
            />

            <Tab.Screen name="Calendar" component={UserCalendar} />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{ tabBarBadge: 15 }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={TabsComponent}
                    options={({ navigation, route }) => ({
                        headerTitle: getHeaderTitle(route),
                        headerRight: () => (
                            <Pressable
                                onPress={() => navigation.navigate("Profile")}
                            >
                                <Image
                                    source={{
                                        uri: "https://i.pinimg.com/originals/cc/2e/01/cc2e011cc5236801ee8fd6d2fc5dc2c5.jpg",
                                    }}
                                    style={styles.profileimg}
                                />
                            </Pressable>
                        ),
                        headerLeft: () => (
                            <Pressable
                                onPress={() => navigation.navigate("Settings")}
                            >
                                <Ionicons
                                    name={"md-settings-outline"}
                                    style={styles.settingsIcon}
                                />
                            </Pressable>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Profile"
                    options={() => ({ headerBackTitle: "Back" })}
                    component={UserProfile}
                />
                <Stack.Screen
                    name="Settings"
                    options={() => ({ headerBackTitle: "Back" })}
                    component={UserSettings}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    profileimg: {
        width: 40,
        height: 40,
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 100,
        marginRight: 21,
        marginBottom: 15,
    },
    settingsIcon: {
        color: "dimgray",
        fontSize: 25,
        height: 38,
        marginLeft: 20,
    },
});
