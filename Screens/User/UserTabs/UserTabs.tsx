import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserHomeScreen from "../UserHomeScreen/UserHomeScreen";
import UserCalendar from "../UserCalendar/UserCalendar";
import Notifications from "../Notifications/Notifications";
import React, { useEffect } from "react";

const Tab = createBottomTabNavigator();
// TODO fix is missing in props validation
// eslint-disable-next-line react/prop-types
export default function UserTabs({ navigation }) {
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
            <Tab.Screen name="Home" component={UserHomeScreen} />

            <Tab.Screen name="Calendar" component={UserCalendar} />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{ tabBarBadge: 15 }}
            />
        </Tab.Navigator>
    );
}
