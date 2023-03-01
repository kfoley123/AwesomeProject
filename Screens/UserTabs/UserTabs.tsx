import { Ionicons } from "@expo/vector-icons";
import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserHomeScreen from "../UserHomeScreen/UserHomeScreen";
import UserCalendar from "../UserCalendar/UserCalendar";
import Notifications from "../Notifications/Notifications";
import React, { FunctionComponent, useEffect } from "react";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function UserTabs({ navigation }) {
    useEffect(() => {
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
