import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminNotifications from "../AdminNotifications/AdminNotifications";
import AdminHome from "../AdminHome/AdminHome";
import AdminCalendar from "../AdminCalendar/AdminCalendar";
import AdminClientList from "../AdminClientList/AdminClientList";

const Tab = createBottomTabNavigator();
// TODO fix is missing in props validation
// eslint-disable-next-line react/prop-types
export default function AdminTabs({ navigation }) {
    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        navigation.setOptions();
    }, []);

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
                    } else if (route.name === "Clients") {
                        return (
                            <Ionicons
                                name={
                                    focused
                                        ? "md-people-sharp"
                                        : "md-people-outline"
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
            <Tab.Screen name="Home" component={AdminHome} />
            <Tab.Screen name="Clients" component={AdminClientList} />

            <Tab.Screen name="Calendar" component={AdminCalendar} />
            <Tab.Screen
                name="Notifications"
                component={AdminNotifications}
                options={{ tabBarBadge: 666 }}
            />
        </Tab.Navigator>
    );
}
