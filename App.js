import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "./Screens/Notifications/Notifications";
import UserProfile from "./Screens/UserProfile/UserProfile";
import UserCalendar from "./Screens/UserCalendar/UserCalendar";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
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
                    name="Notifications"
                    component={Notifications}
                    options={{ tabBarBadge: 45 }}
                />
                <Tab.Screen name="Profile" component={UserProfile} />
                <Tab.Screen name="Calendar" component={UserCalendar} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
